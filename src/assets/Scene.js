
// You can write more code here

/* START OF COMPILED CODE */

export class Scene extends Phaser.Scene {

	constructor() {
		super("Scene");
	}


	preload() {

		this.load.image('tsconfig_1', 'public/tsconfig.png');

	}

	/** @returns {void} */
	editorCreate() {

		// image_1
		const image_1 = this.add.image(608, 118, "tsconfig_1");
		image_1.scaleX = 1;
		image_1.scaleY = 1;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
