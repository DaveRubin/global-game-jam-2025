
// You can write more code here
import { CollectibleBase } from "../CollectibleBase";
import { GAME_WIDTH } from "../consts";

/* START OF COMPILED CODE */

class Head extends Phaser.Physics.Arcade.Image {

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
		console.log("Head awake!");
		Head.instance = this;
		deathSeq.setVisible(false);
		const body = this.body;
		body.setMaxVelocity(100, 100);
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

		this.getByName("DeathSeq").setVisible(false);
		this.getByName("DeathSeq").play("Death");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Head };