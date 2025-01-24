import { onValue, ref, set } from "firebase/database";
import { BaseClient } from "./BaseClient";
import { GameState } from "./GameState";
import { GameStatePlayer } from "./GameStatePlayer";

type PlayerStateCallback = (player: GameStatePlayer) => void;

export class StageClient extends BaseClient {
  onPlayerReadyCallbacks: PlayerStateCallback = (_) => {};
  onPlayerOnCallbacks: PlayerStateCallback = (_) => {};
  currentGameState: GameState = this.createGameState();

  constructor() {
    super();
  }

  async connect(): Promise<string> {
    const urlParams = new URLSearchParams(window.location.search);
    const testGameId = urlParams.get("test-game-id");
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
        this.onPlayerReadyCallbacks(updatedPlayer!);
      }
      if (currentPlayer!.isOn !== updatedPlayer!.isOn) {
        this.onPlayerOnCallbacks(updatedPlayer!);
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
        },
        p2: {
          id: "p2",
          name: "Player 2",
          isOn: false,
          isReady: false,
        },
        p3: {
          id: "p3",
          name: "Player 3",
          isOn: false,
          isReady: false,
        },
        p4: {
          id: "p4",
          name: "Player 4",
          isOn: false,
          isReady: false,
        },
      },
    };
  }
}
