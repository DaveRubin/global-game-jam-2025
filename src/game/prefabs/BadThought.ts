
// You can write more code here

/* START OF COMPILED CODE */

interface BadThought {

	 body: Phaser.Physics.Arcade.StaticBody;
}

class BadThought extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 343, y ?? 322, texture || "Obstacle_01", frame);

		scene.physics.add.existing(this, true);
		this.body.allowGravity = false;
		this.body.setSize(421, 542, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	awake() {
		this.play("Obstacle_02");
	}	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
