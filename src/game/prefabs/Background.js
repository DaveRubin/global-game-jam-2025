
// You can write more code here

/* START OF COMPILED CODE */

class Background extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 1050, y ?? 633);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// BG1
		const bG1 = scene.add.container(-1882, -328);
		bG1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG1);

		// rectangle
		const rectangle = scene.add.rectangle(1421, 929, 128, 128);
		rectangle.scaleX = 9.25;
		rectangle.scaleY = 38.8;
		rectangle.isFilled = true;
		rectangle.fillColor = 16245930;
		rectangle.strokeAlpha = 0;
		bG1.add(rectangle);

		// background_2
		const background_2 = scene.add.image(831, -947, "Background_02");
		background_2.setOrigin(0, 0);
		background_2.tintTopLeft = 16769184;
		background_2.tintTopRight = 16769184;
		background_2.tintBottomLeft = 16769184;
		background_2.tintBottomRight = 16769184;
		bG1.add(background_2);

		// background_3
		const background_3 = scene.add.image(842, -41, "Background_01");
		background_3.setOrigin(0, 0);
		background_3.tintTopLeft = 16701851;
		background_3.tintTopRight = 16701851;
		background_3.tintBottomLeft = 16701851;
		background_3.tintBottomRight = 16701851;
		bG1.add(background_3);

		// background_4
		const background_4 = scene.add.image(835, 410, "Background_02");
		background_4.setOrigin(0, 0);
		background_4.tintTopLeft = 16764289;
		background_4.tintTopRight = 16764289;
		background_4.tintBottomLeft = 16764289;
		background_4.tintBottomRight = 16764289;
		bG1.add(background_4);

		// background_5
		const background_5 = scene.add.image(835, 1165, "Background_01");
		background_5.setOrigin(0, 0);
		background_5.tintTopLeft = 16039554;
		background_5.tintTopRight = 16039554;
		background_5.tintBottomLeft = 16039554;
		background_5.tintBottomRight = 16039554;
		bG1.add(background_5);

		// BG2
		const bG2 = scene.add.container(-1887, -322);
		bG2.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG2);

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(1421, 929, 128, 128);
		rectangle_1.scaleX = 9.25;
		rectangle_1.scaleY = 38.8;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 12383231;
		rectangle_1.strokeAlpha = 0;
		bG2.add(rectangle_1);

		// background
		const background = scene.add.image(831, -947, "Background_02");
		background.setOrigin(0, 0);
		background.tintTopLeft = 9169917;
		background.tintTopRight = 9169917;
		background.tintBottomLeft = 9169917;
		background.tintBottomRight = 9169917;
		bG2.add(background);

		// background_1
		const background_1 = scene.add.image(842, -41, "Background_01");
		background_1.setOrigin(0, 0);
		background_1.tintTopLeft = 6413307;
		background_1.tintTopRight = 6413307;
		background_1.tintBottomLeft = 6413307;
		background_1.tintBottomRight = 6413307;
		bG2.add(background_1);

		// background_6
		const background_6 = scene.add.image(835, 410, "Background_02");
		background_6.setOrigin(0, 0);
		background_6.tintTopLeft = 2543869;
		background_6.tintTopRight = 2543869;
		background_6.tintBottomLeft = 2543869;
		background_6.tintBottomRight = 2543869;
		bG2.add(background_6);

		// background_7
		const background_7 = scene.add.image(835, 1165, "Background_01");
		background_7.setOrigin(0, 0);
		background_7.tintTopLeft = 3000575;
		background_7.tintTopRight = 3000575;
		background_7.tintBottomLeft = 3000575;
		background_7.tintBottomRight = 3000575;
		bG2.add(background_7);

		// BG3
		const bG3 = scene.add.container(-1887, -320);
		bG3.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG3);

		// rectangle_2
		const rectangle_2 = scene.add.rectangle(1421, 929, 128, 128);
		rectangle_2.scaleX = 9.25;
		rectangle_2.scaleY = 38.8;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 13614335;
		rectangle_2.strokeAlpha = 0;
		bG3.add(rectangle_2);

		// background_8
		const background_8 = scene.add.image(831, -947, "Background_02");
		background_8.setOrigin(0, 0);
		background_8.tintTopLeft = 12359933;
		background_8.tintTopRight = 12359933;
		background_8.tintBottomLeft = 12359933;
		background_8.tintBottomRight = 12359933;
		bG3.add(background_8);

		// background_9
		const background_9 = scene.add.image(842, -41, "Background_01");
		background_9.setOrigin(0, 0);
		background_9.tintTopLeft = 11175931;
		background_9.tintTopRight = 11175931;
		background_9.tintBottomLeft = 11175931;
		background_9.tintBottomRight = 11175931;
		bG3.add(background_9);

		// background_10
		const background_10 = scene.add.image(835, 410, "Background_02");
		background_10.setOrigin(0, 0);
		background_10.tintTopLeft = 9136119;
		background_10.tintTopRight = 9136119;
		background_10.tintBottomLeft = 9136119;
		background_10.tintBottomRight = 9136119;
		bG3.add(background_10);

		// background_11
		const background_11 = scene.add.image(835, 1165, "Background_01");
		background_11.setOrigin(0, 0);
		background_11.tintTopLeft = 7951858;
		background_11.tintTopRight = 7951858;
		background_11.tintBottomLeft = 7951858;
		background_11.tintBottomRight = 7951858;
		bG3.add(background_11);

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
