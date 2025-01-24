import { getDatabase, onValue, ref, set } from "firebase/database";
import { GameState } from "./GameState";
import { GameStatePlayer } from "./GameStatePlayer";
import { PlayerColor } from "../game/PlayerColor";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

type PlayerStateCallback = (player: GameStatePlayer) => void;

export class StageClient {
  private app = initializeApp(firebaseConfig);
  root = "ggj2025";
  db = getDatabase(this.app);

  onPlayerReadyCallbacks: PlayerStateCallback = (_) => {};
  onPlayerOnCallbacks: PlayerStateCallback = (_) => {};
  onPlayerAssignedCallbacks: PlayerStateCallback = (_) => {};
  currentGameState: GameState = this.createGameState();

  async connect(): Promise<string> {
    const urlParams = new URLSearchParams(window.location.search);
    const testGameId = urlParams.get("test");
    const gameId = testGameId ? testGameId : crypto.randomUUID();
    await set(ref(this.db, this.root), {
      id: gameId,
    });
    const gameRef = ref(this.db, `${this.root}/${gameId}`);
    await set(gameRef, this.currentGameState);
    onValue(gameRef, (snapshot) => {
      const val = snapshot.val();
      console.log("onValue", val);
      this.handleGameStateChange(val);
    });
    console.log("openRoom", gameId);
    return gameId;
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
      if (currentPlayer!.isAssigned !== updatedPlayer!.isAssigned) {
        console.log("player assigned", updatedPlayer);
        this.onPlayerAssignedCallbacks(updatedPlayer!);
      }
    });
    this.currentGameState = updatedGameState;
  }

  private createGameState(): GameState {
    return {
      players: {
        p1: {
          id: "p1",
          name: "Player 1",
          isOn: false,
          isReady: false,
          isAssigned: false,
          color: PlayerColor.BLUE,
        },
        p2: {
          id: "p2",
          name: "Player 2",
          isOn: false,
          isReady: false,
          isAssigned: false,
          color: PlayerColor.GREEN,
        },
        p3: {
          id: "p3",
          name: "Player 3",
          isOn: false,
          isReady: false,
          isAssigned: false,
          color: PlayerColor.YELLOW,
        },
        p4: {
          id: "p4",
          name: "Player 4",
          isOn: false,
          isReady: false,
          isAssigned: false,
          color: PlayerColor.RED,
        },
      },
    };
  }
}
