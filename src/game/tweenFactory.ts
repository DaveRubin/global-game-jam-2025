import Vector2 = Phaser.Math.Vector2;

export function createTween(
    scene: Phaser.Scene,
    transform: Phaser.GameObjects.Components.Transform,
    offset: Phaser.Math.Vector2,
    options: { moveDuration?: number; delay?: number } = {} // Default to an empty object
): void {
    const { moveDuration = 1000, delay = 0 } = options; // Default values for moveDuration and delay

    scene.tweens.add({
        targets: transform, // The object being moved
        x: transform.x + offset.x, // Target x position
        y: transform.y + offset.y, // Target y position
        duration: moveDuration, // Duration of the movement
        ease: 'Quad.easeInOut', // Easing function (ease-in-out)
        yoyo: true, // Yoyo effect
        repeat: -1, // Infinite repeats
        delay: delay // Delay before the tween starts
    });
}

export class What {
    offset: Vector2;
    delay: number;
}