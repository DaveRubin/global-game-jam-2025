
// You can write more code here

/* START OF COMPILED CODE */

class Rainbow extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// checkpoint_v01
		const checkpoint_v01 = scene.physics.add.staticSprite(0, 0, "CheckPointRainbow_01");
		checkpoint_v01.name = "checkpoint_v01";
		checkpoint_v01.scaleX = 0.5;
		checkpoint_v01.scaleY = 0.5;
		checkpoint_v01.setOrigin(0, 0);
		checkpoint_v01.body.allowGravity = false;
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

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		// @ts-ignore
		this.getByName("checkpoint_v01").play("CheckPointRainbow");
		// @ts-ignore
		this.getByName("Cloud_L").play("CheckPointCloud_L");
		// @ts-ignore
		this.getByName("Cloud_R").play("CheckPointCloud_R");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

export { Rainbow };