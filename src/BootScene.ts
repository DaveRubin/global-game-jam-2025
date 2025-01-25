import Phaser from "phaser";
import encodeQR from "@paulmillr/qr";
import { getStageClient } from "./client/BaseClient";


export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        // Create loading bar
        const progressBox = this.add.graphics();
        const progressBar = this.add.graphics();
        // Loading text
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width / 2 - 160, height / 2, 320, 100);
        const loadingText = this.add.text(width / 2, height / 2 - 50, 'Loading...', {
            font: '72px monospace',
            color: '#222'
        });
        loadingText.setOrigin(0.5, 0.5);

        // Progress bar events
        this.load.on('progress', (value: number) => {
            progressBar.clear();
            progressBar.fillStyle(0x999999, 1);
            progressBar.fillRect(width / 2 - 160, height / 2, 320 * value, 100);
        });

        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            this.scene.start('ConnectingScene');
        });

        // Load all your game assets here
        // Example:
        const stageClient = getStageClient();
        const gameUrl = `${window.location.origin}${window.location.pathname}?game-id=${stageClient.gameId}`;
        const gifBytes = encodeQR(gameUrl, "gif", { scale: 25 });
        const blob = new Blob([gifBytes], { type: "image/gif" });
        const url = URL.createObjectURL(blob);

        this.load.image("qr-code", url);
        this.load.image('bubble', 'public/bubble.png');
        this.load.pack("section1", "public/asset-pack.json");
        this.load.spritesheet('raster', 'public/sunset-raster.png', { frameWidth: 16, frameHeight: 16 });
    }
} 