import { CollectedParticle } from "./prefabs/CollectedParticle";
import { Head2 } from "./prefabs/Head2";
import { HUD } from "./prefabs/HUD";

export class CollectibleBase extends Phaser.Physics.Arcade.Image {
    constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: number | string) {
        super(scene, x, y, texture, frame);
        scene.physics.add.existing(this);
        const body = this.body as Phaser.Physics.Arcade.Body;
        body.setAllowGravity(false);
        body.onOverlap = true;
        this.scene.physics.add.overlap(this, Head2.instance, () => this.collect());
    }


    collect() {
        HUD.instance.collected();
        const y = this.getWorldTransformMatrix().ty;
        const x = this.getWorldTransformMatrix().tx;

        const particle = new CollectedParticle(this.scene, x, y);
        this.scene.add.existing(particle);
        this.destroy();
    }

}