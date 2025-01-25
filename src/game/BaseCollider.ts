import { Head2 } from "./prefabs/Head2";

export class BaseCollider extends Phaser.GameObjects.Container {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);



        this.scene.events.once("scene-awake", () => this.awake());
    }

    awake() {
        const collider = this.getByName("collider") as Phaser.GameObjects.Sprite;
        const body = collider.body as Phaser.Physics.Arcade.StaticBody;
        if (body) {
            body.setSize(this.width, this.height, false);
            body.onCollide = true;
        }
        this.scene.physics.add.collider(Head2.instance, collider);
    }
}
