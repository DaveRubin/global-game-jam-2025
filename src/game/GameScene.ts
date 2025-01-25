
// You can write more code here

import Phaser from "phaser";
import { Controller } from "./Controller";
// import { Level } from "./prefabs/Level";
import { Level_One } from "./prefabs/Level_One";
import { createAnimation } from "./createAnimation";
import { Head2 } from "./prefabs/Head2";
import { GAME_HEIGHT } from "./consts";
import { HUD } from "./prefabs/HUD";
import encodeQR from "@paulmillr/qr";
import { getStageClient } from "../client/BaseClient";
import { Lobby } from "../lobby/Lobby";

/* START OF COMPILED CODE */

export class GameScene extends Phaser.Scene {
	scrollTimer: Phaser.Time.TimerEvent | null = null;
	constructor() {
		super("GameScene");
		GameScene.instance = this;
	}


	preload() {
		const stageClient = getStageClient();
		const gameUrl = `${window.location.origin}${window.location.pathname}?game-id=${stageClient.gameId}`;
		const gifBytes = encodeQR(gameUrl, "gif", { scale: 25 }); // Uncompressed GIF
		const blob = new Blob([gifBytes], { type: "image/gif" });
		const url = URL.createObjectURL(blob);

		this.load.image("qr-code", url);
		this.load.image('bubble', 'public/bubble.png');
		this.load.pack("section1", "public/asset-pack.json");
		this.load.spritesheet('raster', 'public/sunset-raster.png', { frameWidth: 16, frameHeight: 16 });
	}

	static instance: GameScene;
	lobby: Lobby;
	level: Level_One;

	/** @returns {void} */
	editorCreate() {

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
		this.sound.play("Music", {
			loop: true,
			volume: 0.5
		});
		this.level = new Level_One(this);
		this.add.existing(this.level);
		const hud = new HUD(this, 0, 0);
		this.add.existing(hud);
		Head2.instance.body.setAllowGravity(false)


		this.lobby = new Lobby(this);
		this.add.existing(this.lobby);

		this.events.on("start-game", () => {
			this.lobby.hide();
			this.startGame();
		});
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

	async startCameraLogic() {
		const camera = this.cameras.main;
		await this.resetGame();
		Head2.instance.start();



		const scrollSpeed = 2;
		// Update camera position each frame
		this.scrollTimer = this.time.addEvent({
			delay: 50, // Add a small delay (roughly 60fps)
			callback: () => {
				const headWorldY = Head2.instance.getWorldTransformMatrix().ty - camera.scrollY - 400;
				const normalizedLocation = 1 - (headWorldY / GAME_HEIGHT);

				let factor = 1;
				if (normalizedLocation > 0.5) {
					const extra = normalizedLocation - 0.5;
					factor = 1 + extra * 20;
				}
				camera.scrollY -= scrollSpeed * factor;
				camera.zoom -= scrollSpeed * factor * 0.002;
				camera.zoom = Math.max(camera.zoom, 1);
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
			this.sound.play("GameStart");
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

	startGame() {
		new Controller(this);
		this.startCameraLogic();
		this.events.emit("scene-awake");
	}
}
