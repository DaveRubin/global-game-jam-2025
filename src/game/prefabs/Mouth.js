
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

export const coloredImages = [IDLE_IMAGE, BLOW_IMAGE, EFFECT_IMAGE];
/* START OF COMPILED CODE */

class Mouth extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// effect
		const effect = scene.add.image(-3, 4, "AOE");
		effect.name = "effect";
		effect.setOrigin(1, 0.5);
		effect.alpha = 0.2;
		effect.alphaTopLeft = 0.2;
		effect.alphaTopRight = 0.2;
		effect.alphaBottomLeft = 0.2;
		effect.alphaBottomRight = 0.2;
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
		const mouth_Wind_fx = scene.add.sprite(-139, 0, "Mouth_Wind_fx_01");
		mouth_Wind_fx.name = "mouth_Wind_fx";
		this.add(mouth_Wind_fx);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */

		// awake handler
		this.scene.events.once("scene-awake", this.awake, this);
		/* END-USER-CTR-CODE */
	}

	/** @type {"p1"|"p2"|"p3"|"p4"} */
	property = "p1";
	/** @type {"p1"|"p2"|"p3"|"p4"} */
	property_1 = "p1";

	/* START-USER-CODE */
	awake() {
		getPlayerTrigger(this.scene, this.property, (isDown) => this.onPlayerTrigger(isDown));
		this.onPlayerTrigger(false);
		this.list.forEach((child) => {
			if (coloredImages.includes(child.name)) {
				child.setTint(PLAYER_COLORS[this.property]);
			}
		});
		const vfx = this.list.find((child) => child.name === VFX_IMAGE);
		vfx.setVisible(false);
		this.getByName("mouth_Wind_fx").play("Mouth_Wind_fx");
	}
	// Write your code here.

	onPlayerTrigger(isDown) {
		const idleImage = this.list.find((child) => child.name === IDLE_IMAGE);
		const blowImage = this.list.find((child) => child.name === BLOW_IMAGE);

		idleImage.setVisible(!isDown);
		blowImage.setVisible(isDown);

		const vfx = this.list.find((child) => child.name === VFX_IMAGE);

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


		const effect = this.list.find((child) => child.name === EFFECT_IMAGE);

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