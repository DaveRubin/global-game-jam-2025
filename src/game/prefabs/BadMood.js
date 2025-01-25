
// You can write more code here
import {PLAYER_COLORS} from "../consts";
import {BaseCollider} from "../BaseCollider";
import {getPlayerTrigger} from "../getPlayerTrigger";
import {Head2} from "./Head2.js";

/* START OF COMPILED CODE */

class BadMood extends BaseCollider {

	constructor(scene, x, y) {
		super(scene, x ?? 252, y ?? 3);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// cloud
		const cloud = scene.add.sprite(-260, 0, "Cloud_B_01");
		cloud.name = "cloud";
		cloud.scaleX = 2;
		cloud.scaleY = 2;
		cloud.tintFill = true;
		this.add(cloud);

		// obstacle_Empty_Face
		const obstacle_Empty_Face = scene.add.image(-296, -16, "Obstacle_Empty_Face");
		obstacle_Empty_Face.scaleX = 2;
		obstacle_Empty_Face.scaleY = 2;
		this.add(obstacle_Empty_Face);

		// collider
		const collider = scene.physics.add.sprite(-291, -107, "AOE");
		collider.name = "collider";
		collider.scaleX = 2.8;
		collider.scaleY = 1.8;
		collider.visible = false;
		collider.body.moves = false;
		collider.body.pushable = false;
		collider.body.immovable = true;
		collider.body.setSize(886, 331, false);
		this.add(collider);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {"p1"|"p2"|"p3"|"p4"} */
	player = "";

	/* START-USER-CODE */

	awake() {
		const wall = this.getByName("cloud");
		wall.play("Cloud_B");
		super.awake();
		wall.setTint(PLAYER_COLORS[this.player]);



		getPlayerTrigger(this.scene, this.player, (isDown) => this.onPlayerTrigger(isDown));
	}

	onPlayerTrigger(isDown) {
		const collider = this.getByName("collider");
		collider.body.enable = !isDown;
		if (!isDown) {
			if (this.scene.physics.overlap(collider.body, Head2.instance)) {

			}
		}

		const wall = this.getByName("cloud");
		if (isDown) {
			wall.setAlpha(0.2);
		}
		else {
			wall.setAlpha(0.75);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


export {BadMood}