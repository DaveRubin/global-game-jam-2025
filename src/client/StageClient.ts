import {get, getDatabase, onValue, ref, set} from "firebase/database";
import {GameState, GameStateScreen} from "./GameState";
import {GameStatePlayer} from "./GameStatePlayer";
import {PlayerColor} from "../game/PlayerColor";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./config";
import {StateScreenCallback} from "./PlayerCilent.ts";

type PlayerStateCallback = (player: GameStatePlayer) => void;
type ColorStateCallback = (color: PlayerColor | string, isOn: boolean) => void;

export class StageClient {
  private app = initializeApp(firebaseConfig);
  root = "ggj2025";
  db = getDatabase(this.app);

  onScreenChanged: StateScreenCallback = (_) => {};
  onPlayerReadyCallbacks: PlayerStateCallback = (_) => {};
  onPlayerOnCallbacks: ColorStateCallback = (_) => {};
  onPlayerAssignedCallbacks: PlayerStateCallback = (_) => {};
  currentGameState: GameState = this.createGameState();
  gameId!: string;

  async connect(): Promise<string> {
    const urlParams = new URLSearchParams(window.location.search);
    const testGameId = urlParams.get("test");
    this.gameId = testGameId ? testGameId : crypto.randomUUID();
    const gameRef = ref(this.db, `${this.root}/${this.gameId}`);

    const snapshot = await get(gameRef);
    const existing = snapshot.val();
    if (existing) {
      return null;
    }

    await set(ref(this.db, this.root), {
      id: this.gameId,
    });
    await set(gameRef, this.currentGameState);
    onValue(gameRef, (snapshot) => {
      const val = snapshot.val();
      console.log("onValue", val);
      this.handleGameStateChange(val);
    });
    console.log("openRoom", this.gameId);
    return this.gameId;
  }

  private handleGameStateChange(updatedGameState: GameState) {
    Object.values(this.currentGameState.players).forEach((currentPlayer) => {
      const updatedPlayer = Object.values(updatedGameState.players).find(
        (p) => p.id === currentPlayer.id
      );
      if (currentPlayer!.isReady !== updatedPlayer!.isReady) {
        console.log("player ready", updatedPlayer);
        this.onPlayerReadyCallbacks(updatedPlayer!);
      }
      if (!!currentPlayer!.assignedTo !== !!updatedPlayer!.assignedTo) {
        console.log("player assigned", updatedPlayer);
        this.onPlayerAssignedCallbacks(updatedPlayer!);
      }
    });
    const colors = Object.keys(this.currentGameState.colors);
    colors.forEach(color => {
      if (this.currentGameState.colors[color] !== updatedGameState.colors[color]) {
        console.log("color on", color, updatedGameState.colors[color]);
        this.onPlayerOnCallbacks(color, updatedGameState.colors[color]);
      }
    })
    this.currentGameState = updatedGameState;
    this.distributeColors();

    if (updatedGameState.screen === GameStateScreen.LOBBY) {
      if (this.arePlayersReady(updatedGameState)) {
        this.currentGameState.screen = GameStateScreen.GAME;
        this.onScreenChanged(this.currentGameState.screen);
      }
    }
    this.updateState();
  }

  private arePlayersReady(state: GameState): boolean {
    const assignedPlayers = Object.values(state.players).filter(
      (player) => !!player.assignedTo
    );
    if (!assignedPlayers.length) {
      return false;
    }
    return assignedPlayers.every(
      (player) => player.isReady
    );
  }

  private updateState() {
    const path = `${this.root}/${this.gameId}`;
    console.log("updateState", this.currentGameState);
    set(ref(this.db, path), this.currentGameState);
  }

  private distributeColors(isRandomized = false) {
    const allColors = [
      PlayerColor.BLUE,
      PlayerColor.GREEN,
      PlayerColor.YELLOW,
      PlayerColor.RED,
    ];

    // Filter players who are assigned
    const assignedPlayers = Object.values(this.currentGameState.players).filter(
        (player) => !!player.assignedTo
    );

    // Shuffle colors if isRandomized is true
    const colors = isRandomized
        ? [...allColors].sort(() => Math.random() - 0.5)
        : [...allColors];

    Object.values(this.currentGameState.players).forEach((player) => {
      player.colors = [];
    });

    const count = assignedPlayers.length;

    if (count === 1) {
      // Assign all colors to the first player
      assignedPlayers[0].colors = colors;
    } else if (count === 2) {
      // First player gets blue and green, second player gets the rest
      assignedPlayers[0].colors = [colors[0], colors[1]];
      assignedPlayers[1].colors = [colors[2], colors[3]];
    } else if (count === 3) {
      // First player gets blue, second gets green, third gets the rest
      assignedPlayers[0].colors = [colors[0]];
      assignedPlayers[1].colors = [colors[1]];
      assignedPlayers[2].colors = [colors[2], colors[3]];
    } else if (count === 4) {
      // Each player gets one color in order
      for (let i = 0; i < 4; i++) {
        assignedPlayers[i].colors = [colors[i]];
      }
    }
  }

  private createGameState(): GameState {
    return {
      screen: GameStateScreen.LOBBY,
      colors: {
        [PlayerColor.BLUE]: false,
        [PlayerColor.GREEN]: false,
        [PlayerColor.YELLOW]: false,
        [PlayerColor.RED]: false,
      },
      players: {
        p1: {
          id: "p1",
          name: "Player 1",
          isOn: false,
          isReady: false,
          assignedTo: null,
          baseColor: PlayerColor.BLUE,
          colors: [PlayerColor.BLUE],
        },
        p2: {
          id: "p2",
          name: "Player 2",
          isOn: false,
          isReady: false,
          assignedTo: null,
          baseColor: PlayerColor.GREEN,
          colors: [PlayerColor.GREEN],
        },
        p3: {
          id: "p3",
          name: "Player 3",
          isOn: false,
          isReady: false,
          assignedTo: null,
          baseColor: PlayerColor.YELLOW,
          colors: [PlayerColor.YELLOW],
        },
        p4: {
          id: "p4",
          name: "Player 4",
          isOn: false,
          isReady: false,
          assignedTo: null,
          baseColor: PlayerColor.RED,
          colors: [PlayerColor.RED],
        },
      },
    };
  }

  shutdown() {
      this.currentGameState.screen = GameStateScreen.DISCONNECTED;
      this.updateState();
  }
}
