
// You can write more code here

/* START OF COMPILED CODE */

class PlayerOpeningIndication extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// P1_off
		const p1_off = scene.add.image(0, 0, "PlayerBox");
		p1_off.scaleX = 0.5;
		p1_off.scaleY = 0.5;
		p1_off.tintTopLeft = 8947721;
		p1_off.tintTopRight = 8947721;
		p1_off.tintBottomLeft = 8947721;
		p1_off.tintBottomRight = 8947721;
		this.add(p1_off);

		// P1_On
		const p1_On = scene.add.image(0, 0, "PlayerBox");
		p1_On.scaleX = 0.5;
		p1_On.scaleY = 0.5;
		p1_On.visible = false;
		p1_On.tintTopLeft = 16513875;
		p1_On.tintTopRight = 16513875;
		p1_On.tintBottomLeft = 16513875;
		p1_On.tintBottomRight = 16513875;
		this.add(p1_On);

		// Ready
		const ready = scene.add.image(0, 131, "ReadyBox");
		ready.scaleX = 0.5;
		ready.scaleY = 0.5;
		this.add(ready);

		// ReadyText
		const readyText = scene.add.image(0, 131, "ReadyTitle");
		readyText.scaleX = 0.5;
		readyText.scaleY = 0.5;
		readyText.visible = false;
		this.add(readyText);

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
