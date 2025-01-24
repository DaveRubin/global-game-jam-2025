import Phaser from "phaser";
import { ConnectingScene } from "./ConnectingScene.js";
import { LobbyScene } from "./lobby/LobbyScene.js";
import { MobileScene } from "./mobile/MobileScene.js";
import { MobileGameScene } from "./mobile/MobileGameScene.js";
const width = window.innerWidth;
const height = window.innerHeight;
const ratio = height / 2436;

import { GameScene } from "./game/GameScene.js";

const scenes = new URLSearchParams(window.location.search).has("edit-level")
  ? GameScene
  : [ConnectingScene, LobbyScene, MobileScene, MobileGameScene, GameScene];

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: width / ratio,
  height: 2436,
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
