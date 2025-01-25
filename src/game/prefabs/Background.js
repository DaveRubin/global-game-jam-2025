
// You can write more code here

/* START OF COMPILED CODE */

class Background extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 1050, y ?? 633);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// container
		const container = scene.add.container(-1881.52036140902, -345.17954631779565);
		container.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(container);

		// rectangle
		const rectangle = scene.add.rectangle(1421, 929, 128, 128);
		rectangle.scaleX = 9.25;
		rectangle.scaleY = 38.8;
		rectangle.isFilled = true;
		rectangle.fillColor = 16245930;
		rectangle.strokeAlpha = 0;
		container.add(rectangle);

		// background_2
		const background_2 = scene.add.image(831, -947, "Background_02");
		background_2.setOrigin(0, 0);
		background_2.tintTopLeft = 16769184;
		background_2.tintTopRight = 16769184;
		background_2.tintBottomLeft = 16769184;
		background_2.tintBottomRight = 16769184;
		container.add(background_2);

		// background_3
		const background_3 = scene.add.image(842, -41, "Background_01");
		background_3.setOrigin(0, 0);
		background_3.tintTopLeft = 16701851;
		background_3.tintTopRight = 16701851;
		background_3.tintBottomLeft = 16701851;
		background_3.tintBottomRight = 16701851;
		container.add(background_3);

		// background_4
		const background_4 = scene.add.image(835, 410, "Background_02");
		background_4.setOrigin(0, 0);
		background_4.tintTopLeft = 16764289;
		background_4.tintTopRight = 16764289;
		background_4.tintBottomLeft = 16764289;
		background_4.tintBottomRight = 16764289;
		container.add(background_4);

		// background_5
		const background_5 = scene.add.image(835, 1165, "Background_01");
		background_5.setOrigin(0, 0);
		background_5.tintTopLeft = 16039554;
		background_5.tintTopRight = 16039554;
		background_5.tintBottomLeft = 16039554;
		background_5.tintBottomRight = 16039554;
		container.add(background_5);

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
