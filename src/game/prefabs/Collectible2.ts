
// You can write more code here
import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Collectible2 extends CollectibleBase {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "collectible2", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;

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