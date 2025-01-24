
// You can write more code here

/* START OF COMPILED CODE */

class Cat extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// badThought
		const badThought = new BadThought(scene, -49, 0);
		this.add(badThought);

		// cat
		const cat = scene.add.image(0, 0, "Cat_01");
		cat.scaleX = 0.5;
		cat.scaleY = 0.5;
		this.add(cat);
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
export { Cat };