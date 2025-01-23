import Phaser from 'phaser';
import { Scene } from './Scene.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Scene,
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 200 }
    //     }
    // }
};

const game = new Phaser.Game(config);