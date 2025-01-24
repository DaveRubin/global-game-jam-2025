
// You can write more code here

import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

interface Head {

	 body: Phaser.Physics.Arcade.Body;
}

class Head extends Phaser.Physics.Arcade.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Head_Idle", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.friction.x = 0;
		this.body.bounce.x = 0.5;
		this.body.bounce.y = 0.5;
		this.body.angularAcceleration = 5;
		this.body.angularDrag = 5;
		this.body.angularVelocity = 5;
		this.body.setCircle(64);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Create boundaries
		const leftBoundary = scene.add.rectangle(850, 0, 10, 800000);
		const rightBoundary = scene.add.rectangle(-10, 0, 10, 800000);


		// Add physics to boundaries (true makes them static)
		scene.physics.add.existing(leftBoundary, true);
		scene.physics.add.existing(rightBoundary, true);

		// Add collision between head and boundaries
		scene.physics.add.collider(this, [leftBoundary, rightBoundary]);
		console.log("Head awake!");
		Head.instance = this;
		this.body.onCollide = true;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	static instance: Head;
	awake() {
		// Create a looping rotation tween
		this.scene.tweens.add({
			targets: this,
			duration: 1500,
			yoyo: true,
			repeat: -1,
			ease: 'Sine.easeInOut',
			angle: { from: -20, to: 20 }
		});
		// Check for overlaps with other physics objects
		// Enable checking if body is overlapping
		this.body.onOverlap = true;

		// Listen for overlap start
		this.body.world.on('overlap', (gameObject1: Phaser.GameObjects.GameObject, gameObject2: Phaser.GameObjects.GameObject) => {

			console.log("🚀 ~ Head ~ this.body.world.on ~ gameObject1:", gameObject1.constructor.name)
			if (gameObject1.constructor.name.startsWith("Collectible")) {
				(gameObject1 as CollectibleBase).collect();
			}
		});
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Head };