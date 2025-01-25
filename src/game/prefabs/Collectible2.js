
// You can write more code here
import { CollectibleBase } from "../CollectibleBase";
import {createTween} from "../tweenFactory";
import Phaser from "phaser";

/* START OF COMPILED CODE */

class Collectible2 extends CollectibleBase {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "PickUp_02", frame);

		this.scaleX = 0.2;
		this.scaleY = 0.2;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

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
	/** @type {number} */
	offsetX = 0;
	/** @type {number} */
	offsetY = 0;
	/** @type {number} */
	moveDuration = 1000;
	/** @type {number} */
	moveDelay = 0;
	/** @type {number} */
	dsa = 0;

	/* START-USER-CODE */
	static count = 0;
	awake() {
		createTween(this.scene, this, new Phaser.Math.Vector2(this.offsetX, this.offsetY), {
			delay: this.moveDelay,
			moveDuration: this.moveDuration,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Collectible2 };