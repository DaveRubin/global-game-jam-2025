
// You can write more code here
import { CollectibleBase } from "../CollectibleBase";

/* START OF COMPILED CODE */

class Collectible2 extends CollectibleBase {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "PickUp_02", frame);

		this.scaleX = 0.2;
		this.scaleY = 0.2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		if (this.variant === "random") {
			Collectible2.count = (Collectible2.count + 1) % 3;
			const index = Collectible2.count + 1;
			this.setTexture(`PickUp_0${index}`);
		}
		else {
			this.setTexture(`PickUp_0${this.variant}`);
		}
		/* END-USER-CTR-CODE */
	}

	/** @type {"random"|"1"|"2"|"3"} */
	variant = "random";

	/* START-USER-CODE */
	static count = 0;
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Collectible2 };