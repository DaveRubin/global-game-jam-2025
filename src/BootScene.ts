import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BootScene' });
    }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        const background1 = this.add.sprite(width / 2, height - 200, 'background1');
        const background2 = this.add.sprite(width / 2, height, 'background2');
        background1.setOrigin(0.5, 0.5);
        background2.setOrigin(0.5, 0.5);
        background1.setTint(0xf4be82, 0xf4be82, 0xf4be82, 0xf4be82);
        background2.setTint(0xffcd81, 0xffcd81, 0xffcd81, 0xffcd81);

        // Create loading bar
        const progressBar = this.add.graphics();
        const progressBox = this.add.sprite(width / 2, height / 2 + 180, 'loading');
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

        const playerBody = this.add.sprite(width / 2, height - 200, 'body');
        playerBody.scale = 0.5;
        const playerHead = this.add.sprite(width / 2, height - 200 - 105, 'happy');
        playerHead.scale = 0.5 / 3;
        const playerHat = this.add.sprite(width / 2 - 10, height - 200 - 165, 'hat');
        playerHat.scale = 0.2;

        this.load.on('complete', () => {
            this.scene.start('GameScene');
        });

        // Load all your game assets here
        // Example:
        this.load.pack("section1", "public/asset-pack.json");
        this.load.spritesheet('raster', 'public/sunset-raster.png', { frameWidth: 16, frameHeight: 16 });
    }
} 