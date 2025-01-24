import { Head } from "./prefabs/Head";

export class BaseCollider extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: number | string) {
        super(scene, x, y, texture, frame);
        scene.physics.add.existing(this);
        const body = this.body as Phaser.Physics.Arcade.Body;
        if (body) {
            body.setSize(this.width, this.height, false);
            body.onCollide = true;
        }
        this.scene.events.once("scene-awake", () => this.awake());
    }

    awake() {
        this.scene.physics.add.collider(Head.instance, this);
    }
}