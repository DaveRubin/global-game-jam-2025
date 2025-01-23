
// You can write more code here

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

		// image_1
		const image_1 = this.add.image(40, 40, "bubble");
		image_1.scaleX = 0.1;
		image_1.scaleY = 0.1;

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