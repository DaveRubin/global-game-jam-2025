
// You can write more code here

import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Collectible1 extends CollectibleBase {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "collectible1", frame);

		this.scaleX = 0.3;
		this.scaleY = 0.3;

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
export { Collectible1 };