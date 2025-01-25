
// You can write more code here

/* START OF COMPILED CODE */

class LoadingScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 562.5, y ?? 1218);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// image_1
		const image_1 = scene.add.image(0, 0, "LoadingREF");
		image_1.visible = false;
		this.add(image_1);

		// Bar
		const bar = scene.add.rectangle(-455, 228, 128, 128);
		bar.scaleX = 7.05;
		bar.scaleY = 1.4;
		bar.setOrigin(0, 0);
		bar.isFilled = true;
		this.add(bar);

		// LoadingFrame
		const loadingFrame = scene.add.image(2, 319, "Loading_Frame_02");
		this.add(loadingFrame);

		// Logo
		const logo = scene.add.image(0, -294, "Logo");
		this.add(logo);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
