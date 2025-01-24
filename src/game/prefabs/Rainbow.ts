
// You can write more code here

/* START OF COMPILED CODE */

class Rainbow extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "Checkpoint_v01", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		this.setOrigin(0, 0);

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

export { Rainbow };