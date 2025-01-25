
// You can write more code here

import Phaser from "phaser";
import { Controller } from "./Controller";
// import { Level } from "./prefabs/Level";
import { Level_One } from "./prefabs/Level_One";
import { createAnimation } from "./createAnimation";
import { Head2 } from "./prefabs/Head2";
import { GAME_HEIGHT } from "./consts";
import { HUD } from "./prefabs/HUD";

/* START OF COMPILED CODE */

export class GameScene extends Phaser.Scene {
	scrollTimer: Phaser.Time.TimerEvent | null = null;
	constructor() {
		super("GameScene");
		GameScene.instance = this;
	}


	preload() {
		this.load.image('bubble', 'public/bubble.png');
		this.load.pack("section1", "public/asset-pack.json");
		this.load.spritesheet('raster', 'public/sunset-raster.png', { frameWidth: 16, frameHeight: 16 });
	}
	static instance: GameScene;
	level: Level_One;

	/** @returns {void} */
	editorCreate() {

		// bubble physics body

		new Controller(this);
		// Create and add level container to the scene
		this.level = new Level_One(this);

		this.add.existing(this.level); // This adds the container to the display list

		// Make HUD fixed to camera
		createAnimation(this, 'Cloud_A', 3);
		createAnimation(this, 'Cloud_B', 3);
		createAnimation(this, 'Obstacle', 3);
		createAnimation(this, 'CheckPointRainbow', 3);
		createAnimation(this, 'CheckPointCloud_L', 3);
		createAnimation(this, 'CheckPointCloud_R', 3);
		createAnimation(this, 'SuckFx_02', 4);
		createAnimation(this, 'Mouth_Wind_fx', 4);
		createAnimation(this, 'Death', 7, 0);



		this.cameras.main.setBackgroundColor('#aaaaaa');
		const hud = new HUD(this, 0, 0);
		this.add.existing(hud);

		this.startCameraLogic();

		// @ts-ignore
		window.RESET_GAME = this.resetGame.bind(this);

		// Make camera follow the bubble
		this.events.emit("scene-awake");
	}

	reloadLevel() {
		this.physics.world.colliders.destroy();
		this.events.removeAllListeners();
		this.tweens.killAll();
		Head2.instance.destroy();
		this.level.destroy();
		this.level = new Level_One(this);
		this.add.existing(this.level);
		this.startCameraLogic();
		this.events.emit("scene-awake");
	}

	startCameraLogic() {
		const camera = this.cameras.main;

		const targetZoom = 1;
		const startZoom = 1.385;
		camera.setZoom(startZoom);


		const headY = Head2.instance.getWorldTransformMatrix().ty;


		camera.setScroll(0, -GAME_HEIGHT / 2 + headY);

		const scrollSpeed = 2;
		// Update camera position each frame
		this.scrollTimer = this.time.addEvent({
			delay: 50, // Add a small delay (roughly 60fps)
			callback: () => {
				const headWorldY = Head2.instance.getWorldTransformMatrix().ty - camera.scrollY;
				const normalizedLocation = 1 - (headWorldY / GAME_HEIGHT);

				let factor = 1;
				if (normalizedLocation > 0.5) {
					const extra = normalizedLocation - 0.5;
					factor = 1 + extra * 20;
				}
				camera.scrollY -= scrollSpeed * factor;
				camera.zoom -= scrollSpeed * factor * 0.002;
				camera.zoom = Math.max(camera.zoom, targetZoom);
				// Check if Head2 is out of frame

				if (normalizedLocation < -0.1) {
					console.log("🚀 ~ OUT OF BOUNDS ")
					Head2.instance.kill(true)
				}

			},
			loop: true
		});
	}


	resetGame() {
		return new Promise<void>((resolve) => {
			this.scrollTimer?.destroy();
			const startZoom = 1.385;
			const camera = this.cameras.main;

			this.time.delayedCall(3000, () => {
				this.tweens.add({
					targets: this.cameras.main,
					scrollY: camera.height - (camera.height / startZoom),
					zoom: 1.385,
					duration: 2000,
					ease: 'Power2',
					onComplete: () => resolve()
				});
			});
		});
	}


	create() {

		this.editorCreate();
	}
}