
// You can write more code here

import { BaseCollider } from "../BaseCollider";

/* START OF COMPILED CODE */

class Wall1 extends BaseCollider {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// wall_02
		const wall_02 = scene.add.sprite(0, 0, "Cloud_A_01");
		wall_02.name = "wall_02";
		wall_02.scaleX = 0.4;
		wall_02.scaleY = 0.4;
		this.add(wall_02);

		// collider
		const collider = scene.physics.add.sprite(-2, -20, "_MISSING");
		collider.name = "collider";
		collider.scaleX = 16.769825786717423;
		collider.scaleY = 3.0703617855894216;
		collider.visible = false;
		collider.body.moves = false;
		collider.body.allowGravity = false;
		collider.body.allowDrag = false;
		collider.body.allowRotation = false;
		collider.body.pushable = false;
		collider.body.setSize(32, 32, false);
		this.add(collider);

		// image_1
		const image_1 = scene.add.image(-248, 3, "Cloud_Smile_B");
		image_1.scaleX = 0.5;
		image_1.scaleY = 0.5;
		this.add(image_1);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		const wall = this.getByName("wall_02");
		wall.play("Cloud_A");
		super.awake();
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Wall1 };