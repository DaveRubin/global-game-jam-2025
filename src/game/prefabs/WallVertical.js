
import {BaseCollider} from "../BaseCollider";

/* START OF COMPILED CODE */

class WallVertical extends BaseCollider {

	constructor(scene, x, y) {
		super(scene, x ?? 306, y ?? 196);

		// wall
		const wall = scene.add.sprite(0, 0, "Wall_01");
		wall.name = "wall";
		wall.scaleX = 0.5;
		wall.scaleY = 0.5;
		wall.angle = 90;
		this.add(wall);

		// collider
		const collider = scene.physics.add.sprite(10, -1, "_MISSING");
		collider.name = "collider";
		collider.scaleX = 3.9;
		collider.scaleY = 22.4;
		collider.visible = false;
		collider.body.moves = false;
		collider.body.allowGravity = false;
		collider.body.allowDrag = false;
		collider.body.allowRotation = false;
		collider.body.pushable = false;
		collider.body.immovable = true;
		collider.body.setSize(32, 32, false);
		this.add(collider);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	awake() {
		const wall = this.getByName("wall");
		wall.play("Cloud_A");
		super.awake();
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { WallVertical }