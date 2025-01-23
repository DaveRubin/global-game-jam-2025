import Phaser from 'phaser';
import { Scene } from './Scene.js';

const width = window.innerWidth;
const height = window.innerHeight;

const config = {
    type: Phaser.AUTO,
    width,
    height,
    scene: Scene,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: -10 }
        }
    }
};

const game = new Phaser.Game(config);