export function createAnimation(scene: Phaser.Scene, key: string, count: number) {
    scene.anims.create({
        key: key,
        frames: new Array(count).fill(0).map((_, i) => ({ key: `${key}_${(i + 1).toString().padStart(2, '0')}` })),
        frameRate: 4,
        repeat: -1
    });
}