
// You can write more code here

/* START OF COMPILED CODE */

class PlayerOpeningIndication extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// player-box
		const player_box = scene.add.image(0, 0, "PlayerBox");
		player_box.name = "player-box";
		player_box.scaleX = 0.5;
		player_box.scaleY = 0.5;
		player_box.tintTopLeft = 8947721;
		player_box.tintTopRight = 8947721;
		player_box.tintBottomLeft = 8947721;
		player_box.tintBottomRight = 8947721;
		this.add(player_box);

		// Ready
		const ready = scene.add.image(0, 131, "ReadyBox");
		ready.name = "Ready";
		ready.scaleX = 0.5;
		ready.scaleY = 0.5;
		this.add(ready);

		// ReadyText
		const readyText = scene.add.image(0, 131, "ReadyTitle");
		readyText.name = "ReadyText";
		readyText.scaleX = 0.5;
		readyText.scaleY = 0.5;
		readyText.visible = false;
		this.add(readyText);

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	playerColor = 0x000000;

	init(onColor: number) {
		this.playerColor = onColor;
		const playerBox = this.getByName("player-box") as Phaser.GameObjects.Image;
		playerBox.alpha = 0.2;
		playerBox.setTint(onColor);
	}

	setAssigned(assign: boolean) {
		const playerBox = this.getByName("player-box") as Phaser.GameObjects.Image;
		this.scene.tweens.add({
			targets: playerBox,
			alpha: assign ? 1 : 0.2,
			duration: 200,
			ease: 'Power2'
		});
	}

	ready(isReady: boolean) {
		const ready = this.getByName("ReadyText") as Phaser.GameObjects.Image;
		ready.visible = isReady;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { PlayerOpeningIndication };