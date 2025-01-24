
// You can write more code here

/* START OF COMPILED CODE */

class Bills extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// badThought
		const badThought = new BadThought(scene, 0, 0);
		this.add(badThought);

		// arcadesprite_1
		const arcadesprite_1 = scene.physics.add.staticSprite(0, 0, "Bill");
		arcadesprite_1.scaleX = 0.5;
		arcadesprite_1.scaleY = 0.5;
		arcadesprite_1.body.allowGravity = false;
		arcadesprite_1.body.setSize(664, 666, false);
		this.add(arcadesprite_1);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

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
export { Bills };