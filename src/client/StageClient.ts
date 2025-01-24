import { getDatabase, onValue, ref, set } from "firebase/database";
import { GameState, GameStateScreen } from "./GameState";
import { GameStatePlayer } from "./GameStatePlayer";
import { PlayerColor } from "../game/PlayerColor";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import {StateScreenCallback} from "./PlayerCilent.ts";

type PlayerStateCallback = (player: GameStatePlayer) => void;

export class StageClient {
  private app = initializeApp(firebaseConfig);
  root = "ggj2025";
  db = getDatabase(this.app);

  onScreenChanged: StateScreenCallback = (_) => {};
  onPlayerReadyCallbacks: PlayerStateCallback = (_) => {};
  onPlayerOnCallbacks: PlayerStateCallback = (_) => {};
  onPlayerAssignedCallbacks: PlayerStateCallback = (_) => {};
  currentGameState: GameState = this.createGameState();
  gameId!: string;

  async connect(): Promise<string> {
    const urlParams = new URLSearchParams(window.location.search);
    const testGameId = urlParams.get("test");
    this.gameId = testGameId ? testGameId : crypto.randomUUID();
    await set(ref(this.db, this.root), {
      id: this.gameId,
    });
    const gameRef = ref(this.db, `${this.root}/${this.gameId}`);
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
      if (currentPlayer!.isOn !== updatedPlayer!.isOn) {
        console.log("player on", updatedPlayer);
        this.onPlayerOnCallbacks(updatedPlayer!);
      }
      if (!!currentPlayer!.assignedTo !== !!updatedPlayer!.assignedTo) {
        console.log("player assigned", updatedPlayer);
        this.onPlayerAssignedCallbacks(updatedPlayer!);
      }
    });
    this.currentGameState = updatedGameState;

    if (updatedGameState.screen === GameStateScreen.GAME) {
      return;
    }
    if (this.arePlayersReady(updatedGameState)) {
      this.currentGameState.screen = GameStateScreen.GAME;
      this.updateState();
      this.onScreenChanged(this.currentGameState.screen);
    }
  }

  private arePlayersReady(state: GameState): boolean {
    const isAnyAssigned = Object.values(state.players).some(
      (player) => !!player.assignedTo
    );
    if (!isAnyAssigned) {
      return false;
    }
    return Object.values(state.players).every(
      (player) => !!player.assignedTo === player.isReady
    );
  }

  private updateState() {
    const path = `${this.root}/${this.gameId}`;
    console.log("updateState", this.currentGameState);
    set(ref(this.db, path), this.currentGameState);
  }

  private createGameState(): GameState {
    return {
      screen: GameStateScreen.LOBBY,
      players: {
        p1: {
          id: "p1",
          name: "Player 1",
          isOn: false,
          isReady: false,
          assignedTo: null,
          color: PlayerColor.BLUE,
        },
        p2: {
          id: "p2",
          name: "Player 2",
          isOn: false,
          isReady: false,
          assignedTo: null,
          color: PlayerColor.GREEN,
        },
        p3: {
          id: "p3",
          name: "Player 3",
          isOn: false,
          isReady: false,
          assignedTo: null,
          color: PlayerColor.YELLOW,
        },
        p4: {
          id: "p4",
          name: "Player 4",
          isOn: false,
          isReady: false,
          assignedTo: null,
          color: PlayerColor.RED,
        },
      },
    };
  }
}
