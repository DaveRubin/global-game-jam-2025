import Phaser from "phaser";

export class Bubble extends Phaser.Physics.Arcade.Image {

    key: Phaser.Input.Keyboard.Key | undefined = undefined;
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, "bubble");

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(0.1);
        this.setCircle(this.width / 2);
        this.setBounce(0.8);

        scene.events.on("update", this.update, this);
        scene.input.keyboard?.addKey("M").on('down', () => {
            this.addForce(100);
        });
        scene.input.keyboard?.addKey("N").on('down', () => {
            this.addForce(-100);
        });
    }


    addForce(force: number) {

        if (this.body?.velocity) {
            this.body.velocity.add({ x: force, y: 0 });
        }

    }


    update() {
        super.update();
    }
}

