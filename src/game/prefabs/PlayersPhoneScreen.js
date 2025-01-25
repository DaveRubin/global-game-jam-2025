
// You can write more code here

/* START OF COMPILED CODE */

class PlayersPhoneScreen extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -566, y ?? 1218);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// rectangle_1
		const rectangle_1 = scene.add.rectangle(1128.5, 0, 128, 128);
		rectangle_1.scaleX = 17.8;
		rectangle_1.scaleY = 20.5;
		rectangle_1.isFilled = true;
		this.add(rectangle_1);

		// P1_Smile
		const p1_Smile = scene.add.image(1104, 653, "P1_Smile");
		p1_Smile.scaleX = 0.5;
		p1_Smile.scaleY = 0.5;
		this.add(p1_Smile);

		// P2_Smile
		const p2_Smile = scene.add.image(1103, 653, "P2_Smile");
		p2_Smile.scaleX = 0.5;
		p2_Smile.scaleY = 0.5;
		this.add(p2_Smile);

		// P3_Smile
		const p3_Smile = scene.add.image(1096, 673, "P3_Smile");
		p3_Smile.scaleX = 0.5;
		p3_Smile.scaleY = 0.5;
		this.add(p3_Smile);

		// Flood
		const flood = scene.add.image(1132, 0, "Flood");
		flood.scaleX = 0.51;
		flood.scaleY = 0.51;
		flood.alpha = 0.37;
		flood.alphaTopLeft = 0.37;
		flood.alphaTopRight = 0.37;
		flood.alphaBottomLeft = 0.37;
		flood.alphaBottomRight = 0.37;
		this.add(flood);

		// TapWhenReady_1
		const tapWhenReady_1 = scene.add.image(1145, -213, "TAP_WhenReady");
		tapWhenReady_1.scaleX = 0.5;
		tapWhenReady_1.scaleY = 0.5;
		this.add(tapWhenReady_1);

		// P3_Smile_1
		const p3_Smile_1 = scene.add.image(1102, 634, "P4_Smile");
		p3_Smile_1.scaleX = 0.5;
		p3_Smile_1.scaleY = 0.5;
		this.add(p3_Smile_1);

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
