
// You can write more code here

import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Head extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// head_Idle
		const head_Idle = scene.physics.add.image(0, 0, "Head_Idle");
		head_Idle.name = "head_Idle";
		head_Idle.scaleX = 0.5;
		head_Idle.scaleY = 0.5;
		head_Idle.body.friction.x = 0;
		head_Idle.body.bounce.x = 0.5;
		head_Idle.body.bounce.y = 0.5;
		head_Idle.body.angularAcceleration = 5;
		head_Idle.body.angularDrag = 5;
		head_Idle.body.angularVelocity = 5;
		head_Idle.body.setOffset(100, 100);
		head_Idle.body.setCircle(310);
		this.add(head_Idle);

		// DeathSeq
		const deathSeq = scene.add.sprite(0, 18, "Death_01");
		deathSeq.name = "DeathSeq";
		deathSeq.scaleX = 0.5;
		deathSeq.scaleY = 0.5;
		deathSeq.visible = false;
		this.add(deathSeq);
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
		Head.instance = head_Idle;
		head_Idle.body.onCollide = true;
		head_Idle.body.onOverlap = true;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	static instance;
	awake() {
		// Create a looping rotation tween
		this.scene.tweens.add({
			targets: this.getByName("head_Idle"),
			duration: 1500,
			yoyo: true,
			repeat: -1,
			ease: 'Sine.easeInOut',
			angle: { from: -20, to: 20 }
		});
		// Check for overlaps with other physics objects
		// Enable checking if body is overlapping

		this.getByName("DeathSeq").setVisible(true);
		this.getByName("DeathSeq").play("Death");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Head };