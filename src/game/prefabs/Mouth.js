
// You can write more code here

import Phaser from "phaser";
import { PLAYER_COLORS } from "../consts";
import { getPlayerTrigger } from "../getPlayerTrigger";
import { Head2 } from "./Head2";
import {createTween} from "../tweenFactory";


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
		const effect = scene.physics.add.image(-3, 4, "AOE");
		effect.name = "effect";
		effect.setInteractive(new Phaser.Geom.Rectangle(0, 0, 886, 331), Phaser.Geom.Rectangle.Contains);
		effect.setOrigin(1, 0.5);
		effect.alpha = 0.2;
		effect.alphaTopLeft = 0.2;
		effect.alphaTopRight = 0.2;
		effect.alphaBottomLeft = 0.2;
		effect.alphaBottomRight = 0.2;
		effect.body.moves = false;
		effect.body.allowGravity = false;
		effect.body.allowDrag = false;
		effect.body.allowRotation = false;
		effect.body.pushable = false;
		effect.body.setSize(886, 331, false);
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

		/* END-USER-CTR-CODE */
	}

	/** @type {"p1"|"p2"|"p3"|"p4"} */
	property = "p1";
	/** @type {number} */
	offsetX = 0;
	/** @type {number} */
	offsetY = 0;
	/** @type {number} */
	moveDuration = 1000;
	/** @type {number} */
	moveDelay = 0;
	/** @type {Phaser.Math.Vector2} */
	property_1;

	/* START-USER-CODE */
	awake() {
		const effect = this.getByName("effect");

		createTween(this.scene, this, new Phaser.Math.Vector2(this.offsetX, this.offsetY), {
			delay: this.moveDelay,
			moveDuration: this.moveDuration,
		});

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
		this.updatePhysicsBody();
	}

	updatePhysicsBody() {
		const effect = this.getByName("effect");
		if (!effect) return;


		if (this.scaleX < 0) {
			effect.body.setOffset(effect.width, 0); // Flip offset if necessary
		}

	}
	// Write your code here.

	onPlayerTrigger(isDown) {
		const idleImage = this.list.find((child) => child.name === IDLE_IMAGE);
		const blowImage = this.list.find((child) => child.name === BLOW_IMAGE);

		idleImage.setVisible(!isDown);
		blowImage.setVisible(isDown);
		const effect = this.getByName("effect");


		if (isDown) {
			const direction = -1 * this.scaleX;
			const vfx = this.list.find((child) => child.name === VFX_IMAGE);
			vfx.anims.setProgress(0);
			vfx.play("Mouth_Wind_fx");

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
			const touching = this.scene.physics.overlap(effect, Head2.instance);
			if (touching) {
				Head2.instance.body.velocity.add({
					x: 800 * direction,
					y: 0
				});
			}
		}


	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Mouth };