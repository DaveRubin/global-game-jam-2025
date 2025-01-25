import Phaser from "phaser";
import { ConnectingScene } from "./ConnectingScene.js";
import { LobbyScene } from "./lobby/LobbyScene.js";
import { MobileLobbyScene } from "./mobile/MobileLobbyScene.js";
import { MobileGameScene } from "./mobile/MobileGameScene.js";
import { GameScene } from "./game/GameScene.ts";
import { GAME_WIDTH, GAME_HEIGHT } from "./game/consts.js";
import { MobileDisconnectedScene } from "./mobile/MobileDisconnectedScene.ts";



const width = window.innerWidth;
const height = window.innerHeight;
if (new URLSearchParams(window.location.search).has("edit-level")) {
  // @ts-ignore
  window.isDebugMode = true;
}

// @ts-ignore
const scenes = window.isDebugMode
  ? GameScene
  : [ConnectingScene, LobbyScene, MobileLobbyScene, MobileGameScene, GameScene, MobileDisconnectedScene];

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: width,
  height: height,
  scene: scenes,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'game',
    width: GAME_WIDTH,
    height: GAME_HEIGHT
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: -100, x: 0 },
    },
  },
  backgroundColor: "#f7e4aa",
};

new Phaser.Game(config);
