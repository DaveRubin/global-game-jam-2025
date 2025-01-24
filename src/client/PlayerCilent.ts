import { get, getDatabase, onValue, ref, set, update } from "firebase/database";
import { GameState } from "./GameState";
import { GameStatePlayer } from "./GameStatePlayer";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";

export class PlayerClient {
  gameId: string;
  private app = initializeApp(firebaseConfig);
  root = "ggj2025";
  db = getDatabase(this.app);
  player!: GameStatePlayer;

  constructor(gameId: string) {
    this.gameId = gameId;
  }

  async connect(): Promise<GameStatePlayer | null> {
    const gameRef = ref(this.db, `${this.root}/${this.gameId}`);

    const gameSnapshot = await get(gameRef);
    const snapshotValue = gameSnapshot.val();
    const player = this.getFreePlayer(snapshotValue);
    if (!player) {
      return null;
    }
    this.player = player;
    this.setPlayerAssigned();
    console.log("join room ", gameSnapshot.val());

    return this.player;
  }

  private updatePlayerState(change: Partial<GameStatePlayer>) {
    const path = `${this.root}/${this.gameId}/players/${this.player.id}`;
    console.log("updatePlayerState", change);
    update(ref(this.db, path), change);
  }

  private getFreePlayer(state: GameState): GameStatePlayer | undefined {
    return Object.values(state.players).find((player) => !player.isAssigned);
  }

  private setPlayerAssigned() {
    this.player.isAssigned = true;
    this.updatePlayerState({ isAssigned: true });
  }

  public togglePlayerOn(toggle: boolean) {
    this.player.isOn = toggle;
    this.updatePlayerState({ isOn: toggle });
  }

  public togglePlayerReady(toggle: boolean) {
    this.player.isReady = toggle;
    this.updatePlayerState({ isReady: toggle });
  }
}
