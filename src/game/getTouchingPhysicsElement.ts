import Phaser from "phaser";

export function getTouchingPhysicsElement(scene: Phaser.Scene, element: Phaser.GameObjects.Rectangle): Phaser.Physics.Arcade.Image[] {

    const bodies = scene.physics.world.bodies.getArray();
    return bodies.filter(body => {
        const bounds = element.getBounds();
        const touchedBody = body.gameObject as Phaser.Physics.Arcade.Image;
        const otherBounds = touchedBody.getBounds();

        return Phaser.Geom.Rectangle.Overlaps(bounds, otherBounds);
    })
}