
// You can write more code here

import { BadThought } from "./BadThought";

/* START OF COMPILED CODE */

class Cat2 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// badThought
		const badThought = new BadThought(scene, 0, 0);
		this.add(badThought);

		// image_1
		const image_1 = scene.add.image(0, 0, "Cat_02");
		image_1.scaleX = 0.5;
		image_1.scaleY = 0.5;
		this.add(image_1);

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
export { Cat2 };
