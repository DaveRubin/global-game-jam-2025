
// You can write more code here
import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Collectible2 extends CollectibleBase {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "collectible2", frame);

		this.scaleX = 0.2;
		this.scaleY = 0.2;

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
export { Collectible2 };