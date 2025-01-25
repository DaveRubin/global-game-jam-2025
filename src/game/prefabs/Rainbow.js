
// You can write more code here
import { getStageClient } from "../../client/BaseClient";
import { Head2 } from "./Head2";
import { HUD } from "./HUD";

/* START OF COMPILED CODE */

class Rainbow extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// checkpoint_v01
		const checkpoint_v01 = scene.physics.add.sprite(0, 0, "CheckPointRainbow_01");
		checkpoint_v01.name = "checkpoint_v01";
		checkpoint_v01.scaleX = 0.5;
		checkpoint_v01.scaleY = 0.5;
		checkpoint_v01.setOrigin(0, 0);
		checkpoint_v01.body.moves = false;
		checkpoint_v01.body.allowGravity = false;
		checkpoint_v01.body.allowDrag = false;
		checkpoint_v01.body.allowRotation = false;
		checkpoint_v01.body.checkCollision.up = false;
		checkpoint_v01.body.checkCollision.down = false;
		checkpoint_v01.body.checkCollision.left = false;
		checkpoint_v01.body.checkCollision.right = false;
		checkpoint_v01.body.pushable = false;
		checkpoint_v01.body.setSize(2250, 483, false);
		this.add(checkpoint_v01);

		// Cloud_L
		const cloud_L = scene.add.sprite(56, 126, "CheckPointCloud_L_01");
		cloud_L.name = "Cloud_L";
		cloud_L.scaleX = 0.5;
		cloud_L.scaleY = 0.5;
		this.add(cloud_L);

		// Cloud_R
		const cloud_R = scene.add.sprite(1065, 133, "CheckPointCloud_R_01");
		cloud_R.name = "Cloud_R";
		cloud_R.scaleX = 0.5;
		cloud_R.scaleY = 0.5;
		this.add(cloud_R);

		// Meters
		const meters = scene.add.text(438, 31, "", {});
		meters.name = "Meters";
		meters.tintTopLeft = 0;
		meters.tintTopRight = 0;
		meters.tintBottomLeft = 0;
		meters.tintBottomRight = 0;
		meters.text = "50m";
		meters.setStyle({ "align": "center", "fontSize": "168px" });
		this.add(meters);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	text = "50m";

	/* START-USER-CODE */

	// Write your code here.
	awake() {

		const rainbow = this.getByName("checkpoint_v01");
		rainbow.play("CheckPointRainbow");

		this.getByName("Cloud_L").play("CheckPointCloud_L");
		this.getByName("Cloud_R").play("CheckPointCloud_R");

		this.getByName("Meters").setText(this.text);

		this.overlapCollider = this.scene.physics.add.overlap(rainbow, Head2.instance, () => {
			this.onRainbowOverlap();
			this.scene.physics.world.removeCollider(this.overlapCollider);
		});

	}

	onRainbowOverlap() {
		HUD.instance.playConfetti();
		getStageClient().distributeColors(true);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

export { Rainbow };