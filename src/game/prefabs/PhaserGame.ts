import Phaser from 'phaser';
import { GameScene } from '../GameScene.js';

const width = window.innerWidth;
const height = window.innerHeight;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: width,
    height: height,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'game',
        width: 1125,
        height: 2436
    },
    scene: GameScene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: -50, x: 0 }
        }
    },
    backgroundColor: "#f7e4aa"

};


new Phaser.Game(config);