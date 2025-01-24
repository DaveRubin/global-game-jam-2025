import Phaser from "phaser";

export function getTouchingPhysicsElement(scene: Phaser.Scene, element: Phaser.GameObjects.Rectangle): Phaser.Physics.Arcade.Image | null {

    const bodies = scene.physics.world.bodies.getArray();
    for (const body of bodies) {
        const bounds = element.getBounds();
        const touchedBody = body.gameObject as Phaser.Physics.Arcade.Image;
        const otherBounds = touchedBody.getBounds();

        if (Phaser.Geom.Rectangle.Overlaps(bounds, otherBounds)) {
            return touchedBody;
        }
    }

    return null;
}