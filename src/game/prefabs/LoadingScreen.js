
// You can write more code here

/* START OF COMPILED CODE */

class LoadingScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 562.5, y ?? 1218);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		const image_1 = scene.add.image(0, 0, "MainLogo");
		image_1.visible = false;
		this.add(image_1);

<<<<<<< Updated upstream
		// Bar
		const bar = scene.add.rectangle(-455, 228, 128, 128);
		bar.scaleX = 7.05;
		bar.scaleY = 1.4;
		bar.setOrigin(0, 0);
		bar.isFilled = true;
		this.add(bar);

		// LoadingFrame
		const loadingFrame = scene.add.image(2, 319, "Loading_Frame_02");
=======
		const rectangle_1 = scene.add.rectangle(-455, 260, 128, 128);
		rectangle_1.scaleX = 7.05;
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// LoadingFrame
		const loadingFrame = scene.add.image(2, 319, "MainLoading");
>>>>>>> Stashed changes
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
export { LoadingScreen }