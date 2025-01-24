
// You can write more code here

import { PLAYER_COLORS } from "../consts";
import { getPlayerTrigger } from "../getPlayerTrigger";


// You can write more code here
const IDLE_IMAGE = "mouthIdle";
const BLOW_IMAGE = "mouthBlow";
const VFX_IMAGE = "mouth_Wind_fx";
export const coloredImages = [IDLE_IMAGE, BLOW_IMAGE];
/* START OF COMPILED CODE */

class Mouth extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// effect
		const effect = scene.add.rectangle(-3, 4, 128, 128);
		effect.name = "effect";
		effect.scaleX = 4.1;
		effect.setOrigin(1, 0.5);
		effect.isFilled = true;
		effect.fillColor = 16776960;
		effect.fillAlpha = 0.4;
		this.add(effect);

		// mouthIdle
		const mouthIdle = scene.add.image(0, 0, "MouthIdle");
		mouthIdle.name = "mouthIdle";
		this.add(mouthIdle);

		// mouthBlow
		const mouthBlow = scene.add.image(0, 0, "MouthBlow");
		mouthBlow.name = "mouthBlow";
		this.add(mouthBlow);

		// mouth_Wind_fx
		const mouth_Wind_fx = scene.add.image(-139, 0, "Mouth_Wind_fx");
		mouth_Wind_fx.name = "mouth_Wind_fx";
		this.add(mouth_Wind_fx);

		/* START-USER-CTR-CODE */

		// awake handler
		this.scene.events.once("scene-awake", this.awake, this);

		/* END-USER-CTR-CODE */
	}

	public property: "p1" | "p2" | "p3" | "p4" = "p1";
	public property_1: "p1" | "p2" | "p3" | "p4" = "p1";

	/* START-USER-CODE */
	awake() {
		getPlayerTrigger(this.scene, this.property, (isDown) => this.onPlayerTrigger(isDown));
		this.onPlayerTrigger(false);
		this.list.forEach((child) => {
			if (coloredImages.includes(child.name)) {
				console.log("Child name:", child.name);
				(child as Phaser.GameObjects.Image).setTint(PLAYER_COLORS[this.property]);
			}
		});
		const vfx = this.list.find((child) => child.name === VFX_IMAGE) as Phaser.GameObjects.Image;
		vfx.setVisible(false);
	}
	// Write your code here.

	onPlayerTrigger(isDown: boolean) {
		const idleImage = this.list.find((child) => child.name === IDLE_IMAGE) as Phaser.GameObjects.Image;
		const blowImage = this.list.find((child) => child.name === BLOW_IMAGE) as Phaser.GameObjects.Image;

		idleImage.setVisible(!isDown);
		blowImage.setVisible(isDown);

		const vfx = this.list.find((child) => child.name === VFX_IMAGE) as Phaser.GameObjects.Image;

		if (isDown) {
			vfx.setPosition(0, 0);
			vfx.setVisible(true);
			vfx.setAlpha(1);
			this.scene.tweens.killTweensOf(vfx);
			this.scene.tweens.add({
				targets: vfx,
				x: -200,
				alpha: 0,
				duration: 500,
				ease: 'Linear'
			});
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Mouth };