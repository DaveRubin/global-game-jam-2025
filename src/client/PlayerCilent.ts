import {child, DatabaseReference, get, getDatabase, onValue, ref, update} from "firebase/database";
import { GameState, GameStateScreen } from "./GameState";
import { GameStatePlayer } from "./GameStatePlayer";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";
import {PlayerColor} from "../game/PlayerColor.ts";
import throttle from 'lodash/throttle';

export type StateScreenCallback = (screen: GameStateScreen) => void;
export type PlayerColorsChange = (colors: PlayerColor[]) => void;



const MIN_TOGGLE_DURATION = 200; // Minimum time (in milliseconds)
export class PlayerClient {
  private gameRef: DatabaseReference;
  private playerRef: DatabaseReference;
  private throttledToggle: any = {
    [PlayerColor.BLUE]: this.createThrottle(PlayerColor.BLUE),
    [PlayerColor.GREEN]: this.createThrottle(PlayerColor.GREEN),
    [PlayerColor.YELLOW]: this.createThrottle(PlayerColor.YELLOW),
    [PlayerColor.RED]: this.createThrottle(PlayerColor.RED),
  };
  colors: PlayerColor[];
  createThrottle(color: PlayerColor) {
    return throttle(({ isOn }) => {
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
    this.gameRef = ref(this.db, `${this.root}/${this.gameId}`);

    const gameSnapshot = await get(this.gameRef);
    const snapshotValue: GameState = gameSnapshot.val();
    console.log("join room ", snapshotValue);

    if (snapshotValue == null || snapshotValue.screen === GameStateScreen.GAME) {
      return null;
    }

    const playerId = await this.register();
    if (!playerId) {
      return null;
    }
    this.playerRef = child(this.gameRef, `players/${playerId}`);
    this.player = (await get(this.playerRef)).val();

    await this.connectToPlayerColorAssignment();
    await this.connectToScreenChange();

    return this.player;
  }

  private async register() {
    const registrationRef = child(this.gameRef, 'registration');
    await update(registrationRef, {[this.playerId]: 'waiting'});
    return await new Promise(resolve => {
        onValue(child(registrationRef, this.playerId), (snapshot) => {
          const value = snapshot.val();
          if (value === 'waiting') {
            return;
          }
          if (value === 'rejected') {
            return resolve(null);
          }
          resolve(value);
        });
    });
  }

  private async connectToScreenChange() {
    const screenRef = child(this.gameRef, 'screen');
    await onValue(screenRef, (snapshot) => {
      const val: GameStateScreen = snapshot.val();
      console.log("onValue screen", val);
      this.onGameChangeScreen(val);
    });
  }

  private async connectToPlayerColorAssignment() {
    const colorsRef = child(this.gameRef, 'colors');
    await onValue(colorsRef, (snapshot) => {
      const value: { [key: number]: string } = snapshot.val();
      const selectedColors: PlayerColor[] = Object.entries(value)
          .filter(([, playerId]) => playerId === this.player.id)
          .map(([color]) => (color as unknown) as PlayerColor);
      this.colors = selectedColors;
      this.onPlayerColorsChange(selectedColors);
    });
  }

  private async updateColorState(color: number, isOn: boolean) {
    const colorRef = child(this.playerRef, `colors`);
    console.log("updateColorState", color, isOn);
    await update(colorRef, {[color]: isOn});
  }
  public togglePlayerOn(color: number, isOn: boolean) {
      this.throttledToggle[color]({ isOn });
  }

  public async togglePlayerReady(toggle: boolean) {
    this.player.isReady = toggle;
    await update(this.playerRef,{ isReady: toggle });
  }

  async shutdown() {
    const registrationRef = child(this.gameRef, 'registration');
    await update(registrationRef, {[this.playerId]: 'disconnected'});
  }
}


