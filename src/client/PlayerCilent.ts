import { get, onValue, ref, set, update } from "firebase/database";
import { BaseClient } from "./BaseClient";
import { GameState } from "./GameState";
import { GameStatePlayer } from "./GameStatePlayer";

export class PlayerClient extends BaseClient {
  private playerId: string = 0;
  private gameId: string;

  constructor(gameId: string) {
    super();
    this.gameId = gameId;
  }

  async connect(): Promise<string | null> {
    const gameRef = ref(this.db, `${this.root}/${this.gameId}`);

    const gameSnapshot = await get(gameRef);
    const player = this.getFreePlayer(gameSnapshot.val());
    if (!player) {
      return null;
    }
    const newState = this.setPlayerReady(gameSnapshot.val(), player.id);
    await set(gameRef, newState);
    console.log("join room ", gameSnapshot.val());

    this.playerId = player.id;
    return player.id;
  }

  public togglePlayerButton(toggle: boolean) {
    update(
      ref(this.db, `${this.root}/${this.gameId}/players/${this.playerId}`),
      {
        isOn: toggle,
      }
    );
  }

  private getFreePlayer(state: GameState): GameStatePlayer | undefined {
    return Object.values(state.players).find((player) => !player.isReady);
  }

  private setPlayerReady(state: GameState, playerId: string) {
    state.players[playerId].isReady = true;
    return state;
  }
}
