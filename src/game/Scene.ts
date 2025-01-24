
// You can write more code here

import Phaser from "phaser";
import { Bubble } from "./Bubble";
import { Controller } from "./Controller";
import { Level } from "./Level";

/* START OF COMPILED CODE */

export class Scene extends Phaser.Scene {

	constructor() {
		super("Scene");
	}


	preload() {
		this.load.image('bubble', 'public/bubble.png');
		this.load.pack("section1", "public/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// bubble physics body

		new Controller(this);
		// Create and add level container to the scene
		const level = new Level(this);
		this.add.existing(level); // This adds the container to the display list
		const bubble = new Bubble(
			this,
			this.cameras.main.centerX,
			this.cameras.main.height - 100
		);


		// Make camera follow the bubble
		this.cameras.main.startFollow(bubble, false, 0.2, 0.2);
		this.events.emit("scene-awake");
	}


	create() {

		this.editorCreate();
	}
}