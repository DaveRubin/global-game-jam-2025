
// You can write more code here

import { BadThought } from "./BadThought";

/* START OF COMPILED CODE */

class Cigarete extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// badThought
		const badThought = new BadThought(scene, 20, 43);
		this.add(badThought);

		// image_1
		const image_1 = scene.add.image(0, 0, "Ciggarete");
		image_1.scaleX = 0.5;
		image_1.scaleY = 0.5;
		this.add(image_1);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	awake() {
		// @ts-ignore
		// this.getByName("badThought").play("BadThought");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Cigarete };