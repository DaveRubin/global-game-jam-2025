
// You can write more code here

import { BaseCollider } from "../BaseCollider";

/* START OF COMPILED CODE */

interface Wall1 {

	 body: Phaser.Physics.Arcade.StaticBody;
}

class Wall1 extends BaseCollider {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Cloud_A_01", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, true);
		this.body.moves = false;
		this.body.allowGravity = false;
		this.body.allowDrag = false;
		this.body.allowRotation = false;
		this.body.pushable = false;
		this.body.setSize(1685, 300, false);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		this.play("Cloud_A");
		super.awake();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Wall1 };