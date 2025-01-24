
// You can write more code here
import { BaseCollider } from "../BaseCollider";
/* START OF COMPILED CODE */

class Wall2 extends BaseCollider {

	constructor(scene, x, y, texture, frame) {
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
		// Write your code here.
		this.body.onCollide = true;
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	property = 0;

	/* START-USER-CODE */

	/* START-USER-CODE */
	awake() {
		this.play("Cloud_B");
		super.awake();
	}	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

export { Wall2 };
// You can write more code here
