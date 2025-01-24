
// You can write more code here

/* START OF COMPILED CODE */

class Lobby extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 107, y ?? 165);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// text_1
		const text_1 = scene.add.text(0, 0, "", {});
		text_1.text = "LOBBY\n";
		text_1.setStyle({ "fontSize": "72px" });
		this.add(text_1);

		// QR
		const qR = scene.add.rectangle(472, 1908, 128, 128);
		qR.name = "QR";
		qR.scaleX = 4.524157508786485;
		qR.scaleY = 4.524157508786485;
		qR.isFilled = true;
		this.add(qR);

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

export { Lobby };