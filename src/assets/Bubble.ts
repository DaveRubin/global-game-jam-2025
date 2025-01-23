import Phaser from "phaser";

export class Bubble extends Phaser.Physics.Arcade.Image {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "bubble");

        // Add to scene and enable physics
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // Set up physics properties like in Scene.ts
        this.setScale(0.1);
        this.setCircle(this.width / 2);
        this.setBounce(0.8);
        this.setVelocity(
            Phaser.Math.Between(-100, 100),
            Phaser.Math.Between(-100, 100)
        );
        scene.events.on("update", this.update, this);
    }


    update() {
        super.update();

        console.log(`Bubble y position: ${this.y}`);
    }
}

