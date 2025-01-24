
// You can write more code here

import { BaseCollider } from "../BaseCollider";

/* START OF COMPILED CODE */

interface Wall2 {

	 body: Phaser.Physics.Arcade.Body;
}

class Wall2 extends BaseCollider {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Cloud_B_01", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.allowDrag = false;
		this.body.allowRotation = false;
		this.body.pushable = false;
		this.body.setSize(1203, 300, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.body.onCollide = true;
		/* END-USER-CTR-CODE */
	}

	public property: number = 0;

	/* START-USER-CODE */
	awake() {
		this.play("Cloud_B");
		super.awake();
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Wall2 };