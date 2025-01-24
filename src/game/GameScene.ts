
// You can write more code here

import Phaser from "phaser";
import { Controller } from "./Controller";
import { Level } from "./prefabs/Level";
import { createAnimation } from "./createAnimation";

/* START OF COMPILED CODE */

export class GameScene extends Phaser.Scene {

	constructor() {
		super("GameScene");
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
		createAnimation(this, 'Cloud_A', 3);
		createAnimation(this, 'Cloud_B', 3);
		createAnimation(this, 'Obstacle', 3);
		createAnimation(this, 'CheckPointRainbow', 3);
		createAnimation(this, 'CheckPointCloud_L', 3);
		createAnimation(this, 'CheckPointCloud_R', 3);
		createAnimation(this, 'SuckFx_02',4);
		createAnimation(this, 'Mouth_Wind_fx',4);

		


		// Make camera follow the bubble
		// this.cameras.main.startFollow(bubble, false, 0.2, 0.2);
		this.events.emit("scene-awake");
	}


	create() {

		this.editorCreate();
	}
}