import Phaser from "phaser";
import {getPlayerClient} from "../client/BaseClient.ts";

export class MobileBootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MobileBootScene' });
    }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const hexColor = getPlayerClient().player.baseColor;
        this.cameras.main.setBackgroundColor(hexColor);

        // Create loading bar
        const progressBar = this.add.graphics();
        const progressBox = this.add.sprite(width / 2, height / 2 + 180, 'loading2');
        progressBox.setOrigin(0.5, 0.5);

        const targetWidth = progressBox.width - 10;
        // Progress bar events
        this.load.on('progress', (value: number) => {
            progressBar.clear();
            progressBar.fillStyle(0x999999, 1);
            progressBar.fillRect(progressBox.x - progressBox.width/2,
                progressBox.y - progressBox.height/2 / 2 - 20, value * targetWidth, progressBox.height / 2 + 50);
        });

        const logo = this.add.sprite(width / 2, height / 2 - 490, 'logo');
        logo.setOrigin(0.5, 0.5);

        this.load.on('complete', () => {

            this.tweens.add({
                targets: [progressBar, progressBox, logo], // Elements to fade
                alpha: 0, // Fade to transparent
                duration: 500, // Fade-out duration in milliseconds
                ease: 'Power2', // Ease-out effect
                onComplete: () => {
                    this.scene.start('MobileLobbyScene');
                }
            });
        });

        this.load.pack("section1", "public/asset-pack.json");
    }
} 