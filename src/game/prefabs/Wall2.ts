
// You can write more code here

/* START OF COMPILED CODE */

interface Wall2 {

	body: Phaser.Physics.Arcade.StaticBody;
}

class Wall2 extends Phaser.Physics.Arcade.Sprite {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Cloud_B_01", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, true);
		this.body.setSize(1203, 495, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public property: number = 0;

	/* START-USER-CODE */
	awake() {
		console.log("awake WALL 2 !");
		this.play("Cloud_B");
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Wall2 };