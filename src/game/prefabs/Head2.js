
// You can write more code here

import { GAME_WIDTH } from "../consts";

/* START OF COMPILED CODE */

class Head2 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.scaleX = 0.5;
		this.scaleY = 0.5;

		// head_Idle
		const head_Idle = scene.add.image(0, 0, "Head_Idle");
		head_Idle.name = "head_Idle";
		head_Idle.scaleX = 0.5;
		head_Idle.scaleY = 0.5;
		this.add(head_Idle);

		// death_01
		const death_01 = scene.add.sprite(0, 0, "Death_01");
		death_01.name = "death_01";
		death_01.scaleX = 0.5;
		death_01.scaleY = 0.5;
		this.add(death_01);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this);
		this.body.friction.x = 0;
		this.body.bounce.x = 0.5;
		this.body.bounce.y = 0.5;
		this.body.setOffset(-150, -150);
		this.body.setCircle(150);
		this.body.onCollide = true;
		this.body.onOverlap = true;

		// Create boundaries
		const leftBoundary = scene.add.rectangle(GAME_WIDTH, 0, 10, 800000);
		const rightBoundary = scene.add.rectangle(-10, 0, 10, 800000);


		// Add physics to boundaries (true makes them static)
		scene.physics.add.existing(leftBoundary, true);
		scene.physics.add.existing(rightBoundary, true);

		// Add collision between head and boundaries
		scene.physics.add.collider(this, [leftBoundary, rightBoundary]);

		Head2.instance = this;
		death_01.setVisible(false);
		const body = this.body;
		body.setMaxVelocity(150, 80);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	static instance;
	awake() {
		console.log(this.getByName("head_Idle"))
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

		this.getByName("death_01").setVisible(false);
		this.getByName("death_01").play("Death");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Head2 };
