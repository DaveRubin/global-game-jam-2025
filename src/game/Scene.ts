
// You can write more code here

import Phaser from "phaser";
import { Bubble } from "./Bubble";
import { Controller } from "./Controller";

/* START OF COMPILED CODE */

export class Scene extends Phaser.Scene {

	constructor() {
		super("Scene");
	}


	preload() {
		this.load.image('bubble', 'public/bubble.png');
	}

	/** @returns {void} */
	editorCreate() {

		// bubble physics body
		const bubble = new Bubble(
			this,
			this.cameras.main.centerX,
			this.cameras.main.height - 100
		);


		// Make camera follow the bubble
		this.cameras.main.startFollow(bubble, false, 0.2, 0.2);
		new Controller(this);

		this.events.emit("scene-awake");
	}


	create() {

		this.editorCreate();
	}
}