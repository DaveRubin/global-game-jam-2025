import Phaser from 'phaser';
import { Scene } from './Scene.js';

const width = window.innerWidth;
const height = window.innerHeight;

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width,
    height,
    scene: Scene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: -50, x: 0 }
        }
    }
};

new Phaser.Game(config);