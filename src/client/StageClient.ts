import {child, DatabaseReference, get, getDatabase, onValue, ref, set, update} from "firebase/database";
import {GameState, GameStateScreen} from "./GameState";
import {GameStatePlayer} from "./GameStatePlayer";
import {allColors, PlayerColor} from "../game/PlayerColor";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config";
import {StateScreenCallback} from "./PlayerCilent.ts";

type PlayerStateCallback = (player: GameStatePlayer) => void;
type ColorStateCallback = (color: PlayerColor | string, isOn: boolean) => void;

export class StageClient {
  private app = initializeApp(firebaseConfig);
  root = "ggj2025";
  db = getDatabase(this.app);

  onScreenChanged: StateScreenCallback = (_) => { };
  onPlayerReadyCallbacks: PlayerStateCallback = (_) => { };
  onPlayerOnCallbacks: ColorStateCallback = (_) => { };
  onPlayerAssignedCallbacks: PlayerStateCallback = (_) => { };
  currentGameState: GameState = this.createGameState();
  gameId!: string;
  private gameRef: DatabaseReference;
  private playerRefs: { [key : string]: DatabaseReference };

  async connect(): Promise<string | null> {
    const urlParams = new URLSearchParams(window.location.search);
    const testGameId = urlParams.get("test");
    this.gameId = testGameId ? testGameId : crypto.randomUUID();
    this.gameRef = ref(this.db, `${this.root}/${this.gameId}`);

    const snapshot = await get(this.gameRef);
    const existing = snapshot.val();
    if (!testGameId && existing) {
      return null;
    }

    await set(this.gameRef, this.currentGameState);
    this.playerRefs = {}
    Object.values(this.currentGameState.players)
        .forEach(player => this.connectToPlayer(player.id))
    this.connectToPlayerRegistration();

    console.log("openRoom", this.gameId);
    return this.gameId;
  }

  private connectToPlayerRegistration() {
    const registrationRef = child(this.gameRef, `registration`);
    onValue(registrationRef, (snapshot) => {
      const value = snapshot.val();
      if (value == null) {
        return;
      }
      Object.entries(value)
          .forEach(([name, state]) => {
            if (state === 'waiting') {
              this.assignPlayer(name);
            }
            else if (state === 'disconnected') {
              this.disconnectPlayer(name);
            }
      });
    });
  }

  private assignPlayer(name: string) {
    const registrationRef = child(this.gameRef, `registration`);
    const freePlayer: GameStatePlayer | undefined = this.getFreePlayer();
    if (!freePlayer) {
      return update(registrationRef, { [name]: 'rejected' });
    }
    freePlayer.assignedTo = name;
    update(registrationRef, { [name]: freePlayer.id });
    this.distributeColors();
    update(this.playerRefs[freePlayer.id], { assignedTo: name });
  }

  private getFreePlayer(): GameStatePlayer | undefined {
    return Object.values(this.currentGameState.players).find((player) => !player.assignedTo);
  }

  private disconnectPlayer(name: string) {
    const assignedPlayer: GameStatePlayer | undefined = this.getAssignedPlayer(name);
    if (!assignedPlayer) {
      return;
    }
    assignedPlayer.isReady = false;
    assignedPlayer.assignedTo = null;
    this.distributeColors();
    update(this.playerRefs[assignedPlayer.id], { assignedTo: null, isReady: false });
  }

  private getAssignedPlayer(playerRegistrationId): GameStatePlayer | undefined {
    return Object.values(this.currentGameState.players).find((player) => player.assignedTo === playerRegistrationId);
  }

  private connectToPlayer(playerId: string) {
    const playerRef = child(this.gameRef, `players/${playerId}`);
    this.playerRefs[playerId] = playerRef;
    const readyRef = child(playerRef, 'isReady');
    const assignedTo = child(playerRef, 'assignedTo');
    const colorsRef = child(playerRef, 'colors');

    onValue(readyRef, (snapshot) => {
      const currentPlayer = this.currentGameState.players[playerId];
      const isReady = snapshot.val();
      if (currentPlayer.isReady !== isReady) {
        console.log("player ready", currentPlayer);
        currentPlayer.isReady = isReady;
        this.onPlayerReadyCallbacks(currentPlayer!);

        if (this.arePlayersReady()) {
          this.currentGameState.screen = GameStateScreen.GAME;
          this.onScreenChanged(this.currentGameState.screen);
          update(this.gameRef, { screen: this.currentGameState.screen });
        }
      }
    })

    allColors.forEach(color => {
      const specificColorRef = child(colorsRef, `${color}`);
      onValue(specificColorRef, (snapshot) => {
        const currentPlayer = this.currentGameState.players[playerId];
        const updatedColorIsOn: boolean = snapshot.val();
        const currentPlayerColorIsOn = currentPlayer.colors[color];
        if (currentPlayerColorIsOn !== updatedColorIsOn) {
          console.log("player color change", currentPlayerColorIsOn, updatedColorIsOn);
          currentPlayer.colors[color] = updatedColorIsOn;
          this.onPlayerOnCallbacks(color, updatedColorIsOn);
        }
      });
    })

    onValue(assignedTo, (snapshot) => {
      const currentPlayer = this.currentGameState.players[playerId];
      const assignedTo = snapshot.val();
      console.log("player ready", currentPlayer);
      currentPlayer.assignedTo = assignedTo;
      this.onPlayerAssignedCallbacks(currentPlayer!);
    });
  }

  private arePlayersReady(): boolean {
    const assignedPlayers = Object.values(this.currentGameState.players).filter(
      (player) => !!player.assignedTo
    );
    const isSingleColor = (new URLSearchParams(window.location.search).get("single")) != null;

    if ((!isSingleColor && assignedPlayers.length) || (isSingleColor && assignedPlayers.length === 4)) {
      return assignedPlayers.every(
          (player) => player.isReady
      );
    }
    return null;
  }

  public distributeColors(isRandomized = false) {

    // Filter players who are assigned
    const assignedPlayers = Object.values(this.currentGameState.players).filter(
      (player) => !!player.assignedTo
    );

    // Shuffle colors if isRandomized is true
    const colors = isRandomized
      ? [...allColors].sort(() => Math.random() - 0.5)
      : [...allColors];

    this.currentGameState.colors = {
      [PlayerColor.BLUE]: 'unassigned',
      [PlayerColor.GREEN]: 'unassigned',
      [PlayerColor.YELLOW]: 'unassigned',
      [PlayerColor.RED]: 'unassigned',
    };

    const count = assignedPlayers.length;

    if (count === 1) {
      // Assign all colors to the first player

      colors.forEach(color => this.currentGameState.colors[color] = assignedPlayers[0].id);
    } else if (count === 2) {
      // First player gets blue and green, second player gets the rest
      [colors[0], colors[1]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[0].id);
      [colors[2], colors[3]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[1].id);
    } else if (count === 3) {
      // First player gets blue, second gets green, third gets the rest
      [colors[0]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[0].id);
      [colors[1]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[1].id);
      [colors[2], colors[3]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[2].id);
    } else if (count === 4) {
      [colors[0]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[0].id);
      [colors[1]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[1].id);
      [colors[2]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[2].id);
      [colors[3]].forEach(color => this.currentGameState.colors[color] = assignedPlayers[3].id);
    }

    update(child(this.gameRef, 'colors'), this.currentGameState.colors);
  }

  private createGameState(): GameState {
    return {
      screen: GameStateScreen.LOBBY,
      registration: {
        empty: 'rejected'
      },
      colors: {
        [PlayerColor.BLUE]: 'unassigned',
        [PlayerColor.GREEN]: 'unassigned',
        [PlayerColor.YELLOW]: 'unassigned',
        [PlayerColor.RED]: 'unassigned',
      },
      players: {
        p1: this.createPlayer('p1', PlayerColor.BLUE),
        p2: this.createPlayer('p2', PlayerColor.GREEN),
        p3: this.createPlayer('p3', PlayerColor.YELLOW),
        p4: this.createPlayer('p4', PlayerColor.RED),
      },
    };
  }

  private createPlayer(playerId: string, baseColor: PlayerColor): GameStatePlayer {
    return {
      id: playerId,
      name: playerId,
      colors: {
        [PlayerColor.BLUE]: false,
        [PlayerColor.GREEN]: false,
        [PlayerColor.YELLOW]: false,
        [PlayerColor.RED]: false,
      },
      isReady: false,
      assignedTo: null,
      baseColor: baseColor,
    }
  }
  shutdown() {
    this.currentGameState.screen = GameStateScreen.DISCONNECTED;
    update(this.gameRef, { screen: GameStateScreen.DISCONNECTED });
  }
}
