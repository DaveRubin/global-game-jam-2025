
// You can write more code here

/* START OF COMPILED CODE */

import {Sprite} from "@babylonjs/core/index.js";
import {PLAYER_COLORS} from "../consts.js";

class BadMood extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 252, y ?? 3);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// cloud_B_01
		const cloud_B_01 = scene.add.sprite(-260, 0, "Cloud_B_01");
		cloud_B_01.scaleX = 2;
		cloud_B_01.scaleY = 2;
		cloud_B_01.alpha = 0.75;
		cloud_B_01.alphaTopLeft = 0.75;
		cloud_B_01.alphaTopRight = 0.75;
		cloud_B_01.alphaBottomLeft = 0.75;
		cloud_B_01.alphaBottomRight = 0.75;
		cloud_B_01.tintFill = true;
		this.add(cloud_B_01);

		// obstacle_Empty_Face
		const obstacle_Empty_Face = scene.add.image(-296, -16, "Obstacle_Empty_Face");
		obstacle_Empty_Face.scaleX = 2;
		obstacle_Empty_Face.scaleY = 2;
		this.add(obstacle_Empty_Face);

		// arcadesprite_1
		const arcadesprite_1 = scene.physics.add.sprite(-291, -73, "AOE");
		arcadesprite_1.scaleX = 2.8;
		arcadesprite_1.scaleY = 1.35;
		arcadesprite_1.visible = false;
		arcadesprite_1.body.moves = false;
		arcadesprite_1.body.pushable = false;
		arcadesprite_1.body.immovable = true;
		arcadesprite_1.body.setSize(886, 331, false);
		this.add(arcadesprite_1);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {"p1"|"p2"|"p3"|"p4"} */
	player = "";

	/* START-USER-CODE */

	awake() {
		const wall: Phaser.GameObjects.Sprite = this.getByName("Cloud_B_01");
		wall.play("Cloud_B");
		super.awake();
		wall.setTint(PLAYER_COLORS[this.player])
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


export {BadMood}