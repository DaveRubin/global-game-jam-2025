
// You can write more code here

import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Collectible1 extends CollectibleBase {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "collectible1", frame);

		this.scaleX = 0.2;
		this.scaleY = 0.2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	awake() {
		this.setRotation(Math.random() * Math.PI * 2);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Collectible1 };