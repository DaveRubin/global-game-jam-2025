
// You can write more code here

import Phaser from "phaser";
import { Bubble } from "./Bubble";

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
		this.cameras.main.startFollow(bubble, false, 0.1, 0.1);

		this.events.emit("scene-awake");
	}


	create() {

		this.editorCreate();
	}
}






/*
In game
 - bubble float + apply force
 - Game controller -
	* onPlayerXStarted
	* onPlayerXEnded
	* should keep state of players "on" status

 - walls (bouncy / sticky)
 - pusher (per player) - should apply force in a direction
 - spikes (kills bubble)
 
Server:
 - Setup firebase
 - setup room and connect (QR ! ! ! ! !  !)

*/