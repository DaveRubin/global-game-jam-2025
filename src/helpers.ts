import Image = Phaser.GameObjects.Image;
import {Scene} from "phaser";

export function duplicateImage(scene: Scene, original: Image) {
    const duplicate = scene.add.image(original.x, original.y, original.texture.key);

    // Copy properties
    duplicate.setScale(original.scaleX, original.scaleY);
    duplicate.setRotation(original.rotation);
    duplicate.setAlpha(original.alpha);
    duplicate.setOrigin(original.originX, original.originY);
    duplicate.setDepth(original.depth);
    duplicate.flipX = original.flipX;
    duplicate.flipY = original.flipY;

    return duplicate;
}