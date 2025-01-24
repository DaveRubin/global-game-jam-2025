
// You can write more code here

/* START OF COMPILED CODE */

class Mouth extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// mouthIdle
		const mouthIdle = scene.add.image(0, 0, "MouthIdle");
		this.add(mouthIdle);

		// mouthBlow
		const mouthBlow = scene.add.image(0, 0, "MouthBlow");
		this.add(mouthBlow);

		// mouth_Wind_fx
		const mouth_Wind_fx = scene.add.image(-139, 0, "Mouth_Wind_fx");
		this.add(mouth_Wind_fx);

		// effect
		const effect = scene.add.rectangle(-3, 4, 128, 128);
		effect.scaleX = 4;
		effect.setOrigin(1, 0.5);
		effect.isFilled = true;
		effect.fillColor = 16776960;
		effect.fillAlpha = 0.4;
		this.add(effect);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public property: "p1"|"p2"|"p3"|"p4" = "p1";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Mouth };