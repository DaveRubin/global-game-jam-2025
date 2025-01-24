
// You can write more code here

/* START OF COMPILED CODE */

class Nose extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// noseSuck
		const noseSuck = scene.add.image(0, 0, "NoseSuck");
		this.add(noseSuck);

		// noseIdle
		const noseIdle = scene.add.image(0, 0, "NoseIdle");
		this.add(noseIdle);

		// noseVfx
		const noseVfx = scene.add.image(-2, 373, "NoseVfx");
		this.add(noseVfx);

		// effect
		const effect = scene.add.rectangle(0, 0, 128, 128);
		effect.scaleX = 4;
		effect.angle = -90;
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
export { Nose };