import Phaser from "phaser";
import { ConnectingScene } from "./ConnectingScene.js";
import { LobbyScene } from "./lobby/LobbyScene.js";
import { MobileScene } from "./mobile/MobileScene.js";
import { MobileGameScene } from "./mobile/MobileGameScene.js";
import { GameScene } from "./game/GameScene.ts.js";
import { GAME_WIDTH, GAME_HEIGHT } from "./game/consts.js";

const scenes = new URLSearchParams(window.location.search).has("edit-level")
  ? GameScene
  : [ConnectingScene, LobbyScene, MobileScene, MobileGameScene, GameScene];

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  scene: scenes,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: -50, x: 0 },
    },
  },
  backgroundColor: "#f7e4aa",
};

new Phaser.Game(config);
