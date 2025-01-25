
// You can write more code here
import { BaseCollider } from "../BaseCollider";
/* START OF COMPILED CODE */

class Wall2 extends BaseCollider {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// wall_01
		const wall_01 = scene.physics.add.sprite(0, 0, "Cloud_B_01");
		wall_01.name = "wall_01";
		wall_01.scaleX = 0.5;
		wall_01.scaleY = 0.5;
		wall_01.body.moves = false;
		wall_01.body.allowGravity = false;
		wall_01.body.allowDrag = false;
		wall_01.body.allowRotation = false;
		wall_01.body.pushable = false;
		wall_01.body.setSize(1203, 300, false);
		this.add(wall_01);

		// collider
		const collider = scene.physics.add.sprite(5, -14, "_MISSING");
		collider.name = "collider";
		collider.scaleX = 16.40969611167718;
		collider.scaleY = -3.9650974652694466;
		collider.visible = false;
		collider.body.moves = false;
		collider.body.allowGravity = false;
		collider.body.allowDrag = false;
		collider.body.allowRotation = false;
		collider.body.pushable = false;
		collider.body.setSize(32, 32, false);
		this.add(collider);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.

		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	property = 0;

	/* START-USER-CODE */

	/* START-USER-CODE */
	awake() {
		const wall = this.getByName("wall_01");
		wall.play("Cloud_B");
		super.awake();
	}	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

export { Wall2 };
// You can write more code here
