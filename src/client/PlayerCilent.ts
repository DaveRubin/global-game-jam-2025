import {get, getDatabase, onValue, ref, update} from "firebase/database";
import {GameState, GameStateScreen} from "./GameState";
import {GameStatePlayer} from "./GameStatePlayer";
import {firebaseConfig} from "./config";
import {initializeApp} from "firebase/app";
import {PlayerColor} from "../game/PlayerColor.ts";
import throttle from 'lodash/throttle';

export type StateScreenCallback = (screen: GameStateScreen) => void;
export type PlayerColorsChange = (colors: PlayerColor[]) => void;

const MIN_TOGGLE_DURATION = 200; // Minimum time (in milliseconds)
export class PlayerClient {
  throttledToggle : any = {
    [PlayerColor.BLUE]: this.createThrottle(PlayerColor.BLUE),
    [PlayerColor.GREEN]: this.createThrottle(PlayerColor.GREEN),
    [PlayerColor.YELLOW]: this.createThrottle(PlayerColor.YELLOW),
    [PlayerColor.RED]: this.createThrottle(PlayerColor.RED),
  };
  createThrottle(color: PlayerColor) {
    return throttle(
        ({isOn}) => {
          this.updateColorState(color, isOn);
        },
        MIN_TOGGLE_DURATION,
        { trailing: true } // Ensures the last call is executed after the throttle duration
    );
  }
  onGameChangeScreen: StateScreenCallback = (screen) => {
    console.log("PlayerStateScreenCallback", screen);
  };
  onPlayerColorsChange: PlayerColorsChange = (screen) => {
    console.log("PlayerStateScreenCallback", screen);
  };
  gameId: string;
  playerId: string = crypto.randomUUID();
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
    const snapshotValue: GameState = gameSnapshot.val();

    if (snapshotValue == null || snapshotValue.screen === GameStateScreen.GAME) {
      return null;
    }

    const player = this.getFreePlayer(snapshotValue);
    if (!player) {
      return null;
    }
    this.player = player;
    this.setPlayerAssigned();
    console.log("join room ", gameSnapshot.val());

    onValue(ref(this.db, `${this.root}/${this.gameId}/screen`), (snapshot) => {
      const val: GameStateScreen = snapshot.val();
      console.log("onValue screen", val);
      this.onGameChangeScreen(val);
    });

    onValue(ref(this.db, `${this.root}/${this.gameId}/players/${this.player.id}/colors`), (snapshot) => {
      const colors: PlayerColor[] = snapshot.val();
      console.log("onValue colors", colors);
      this.player.colors = colors;
      this.onPlayerColorsChange(colors);
    });

    return this.player;
  }

  private updatePlayerState(change: Partial<GameStatePlayer>) {
    const path = `${this.root}/${this.gameId}/players/${this.player.id}`;
    console.log("updatePlayerState", change);
    update(ref(this.db, path), change);
  }

  private updateColorState(color: number, isOn: boolean) {
    const path = `${this.root}/${this.gameId}/colors`;
    console.log("updateColorState", path, isOn);
    update(ref(this.db, path), {[color]: isOn});
  }

  private getFreePlayer(state: GameState): GameStatePlayer | undefined {
    return Object.values(state.players).find((player) => !player.assignedTo);
  }

  private setPlayerAssigned() {
    this.updatePlayerState({ assignedTo: this.playerId });
  }

  public togglePlayerOn(color: number, isOn: boolean) {
    this.throttledToggle[color]({ isOn });
  }

  public togglePlayerReady(toggle: boolean) {
    this.player.isReady = toggle;
    this.updatePlayerState({ isReady: toggle });
  }

  shutdown() {
    this.updatePlayerState({ assignedTo: null });
  }
}


