
// You can write more code here

import Phaser from "phaser";
import { PLAYER_COLORS } from "../consts";
import { getPlayerTrigger } from "../getPlayerTrigger";
import { getTouchingPhysicsElement } from "../getTouchingPhysicsElement";


// You can write more code here
const IDLE_IMAGE = "mouthIdle";
const BLOW_IMAGE = "mouthBlow";
const VFX_IMAGE = "mouth_Wind_fx";
const EFFECT_IMAGE = "effect";
export const coloredImages = [IDLE_IMAGE, BLOW_IMAGE];
/* START OF COMPILED CODE */

class Mouth extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// effect
		const effect = scene.add.image(-3, 4, "AOE");
		effect.name = "effect";
		effect.setOrigin(1, 0.5);
		this.add(effect);

		// mouthIdle
		const mouthIdle = scene.add.image(0, 0, "MouthIdle_1");
		mouthIdle.name = "mouthIdle";
		mouthIdle.scaleX = 0.5;
		mouthIdle.scaleY = 0.5;
		this.add(mouthIdle);

		// mouthBlow
		const mouthBlow = scene.add.image(0, 0, "MouthBlow_1");
		mouthBlow.name = "mouthBlow";
		mouthBlow.scaleX = 0.5;
		mouthBlow.scaleY = 0.5;
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

	public property: "p1"|"p2"|"p3"|"p4" = "p1";
	public property_1: "p1"|"p2"|"p3"|"p4" = "p1";

	/* START-USER-CODE */
	awake() {
		getPlayerTrigger(this.scene, this.property, (isDown) => this.onPlayerTrigger(isDown));
		this.onPlayerTrigger(false);
		this.list.forEach((child) => {
			if (coloredImages.includes(child.name)) {
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
			vfx.setPosition(-50, 0);
			vfx.setVisible(true);
			vfx.setAlpha(1);
			this.scene.tweens.killTweensOf(vfx);
			this.scene.tweens.add({
				targets: vfx,
				x: -250,
				alpha: 0,
				duration: 500,
				ease: 'Linear'
			});
		}


		const effect = this.list.find((child) => child.name === EFFECT_IMAGE) as Phaser.GameObjects.Rectangle;

		if (isDown) {
			const touchedBody = getTouchingPhysicsElement(this.scene, effect);
			if (touchedBody?.body) {
				const touchedWorldPoint = this.getWorldTransformMatrix().transformPoint(touchedBody.x, touchedBody.y);
				const worldPoint = this.getWorldTransformMatrix().transformPoint(effect.x, effect.y);
				const dx = worldPoint.x - touchedWorldPoint.x;
				const maxDist = 600;
				const part = Math.abs(dx) / maxDist;
				if (part < 1) {
					const direction = dx > 0 ? 1 : -1;
					const forceX = 1 - part;
					touchedBody.body.velocity.add({
						x: forceX * 200 * direction,
						y: 0
					});
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Mouth };