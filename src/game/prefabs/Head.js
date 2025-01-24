
// You can write more code here

import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Head extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
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
		this.body.setOffset(100, 100);
		this.body.setCircle(310);
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
	static instance;
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
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Head };