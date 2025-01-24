import { onValue, ref, set } from "firebase/database";
import { BaseClient } from "./BaseClient";
import { GameState } from "./GameState";

export class StageClient extends BaseClient {
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
    await set(gameRef, this.createGameState());
    onValue(gameRef, (snapshot) => {
      console.log("onValue", snapshot.val());
    });
    console.log("openRoom", gameId);
    return gameId;
  }

  private createGameState(): GameState {
    return {
      players: [
        {
          id: "p1",
          name: "Player 1",
          isOn: false,
          isReady: false,
        },
        {
          id: "p2",
          name: "Player 2",
          isOn: false,
          isReady: false,
        },
        {
          id: "p3",
          name: "Player 3",
          isOn: false,
          isReady: false,
        },
        {
          id: "p4",
          name: "Player 4",
          isOn: false,
          isReady: false,
        },
      ],
    };
  }
}
