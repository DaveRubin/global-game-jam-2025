import Phaser from "phaser";
import { ConnectingScene } from "./ConnectingScene.js";
import { LobbyScene } from "./lobby/LobbyScene.js";
import { MobileScene } from "./mobile/MobileScene.js";
const width = window.innerWidth;
const height = window.innerHeight;
import { Scene } from "./game/Scene.js";

const scenes = new URLSearchParams(window.location.search).has('edit-level')
  ? Scene
  : [ConnectingScene, LobbyScene, MobileScene];


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width,
  height,
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
