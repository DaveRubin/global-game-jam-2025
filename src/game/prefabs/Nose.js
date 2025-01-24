import Phaser from "phaser";
import { PLAYER_COLORS } from "../consts";
import { getPlayerTrigger } from "../getPlayerTrigger";
import { getTouchingPhysicsElement } from "../getTouchingPhysicsElement";


// You can write more code here

const SUCK_IMAGE = "noseSuck";
const IDLE_IMAGE = "noseIdle";
const VFX_IMAGE = "noseVfx";
const EFFECT_IMAGE = "effect";

export const coloredImages = [SUCK_IMAGE, IDLE_IMAGE, VFX_IMAGE, EFFECT_IMAGE];

/* START OF COMPILED CODE */

class Nose extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.scaleX = 0.75;
		this.scaleY = 0.75;

		// effect
		const effect = scene.add.image(0, 0, "AOE");
		effect.name = "effect";
		effect.angle = -90;
		effect.setOrigin(1, 0.5);
		effect.alpha = 0.2;
		effect.alphaTopLeft = 0.2;
		effect.alphaTopRight = 0.2;
		effect.alphaBottomLeft = 0.2;
		effect.alphaBottomRight = 0.2;
		this.add(effect);

		// noseSuck
		const noseSuck = scene.add.image(0, 0, "NoseSuck");
		noseSuck.name = "noseSuck";
		noseSuck.scaleX = 0.5;
		noseSuck.scaleY = 0.5;
		this.add(noseSuck);

		// noseIdle
		const noseIdle = scene.add.image(0, 0, "NoseIdle");
		noseIdle.name = "noseIdle";
		noseIdle.scaleX = 0.5;
		noseIdle.scaleY = 0.5;
		this.add(noseIdle);

		// noseVfx
		const noseVfx = scene.add.sprite(-2, 197, "SuckFx_02_01");
		noseVfx.name = "noseVfx";
		noseVfx.scaleX = 0.5;
		noseVfx.scaleY = 0.5;
		this.add(noseVfx);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	/** @type {"p1"|"p2"|"p3"|"p4"} */
	property = "p1";

	/* START-USER-CODE */
	awake() {
		getPlayerTrigger(this.scene, this.property, (isDown) => this.onPlayerTrigger(isDown));
		this.onPlayerTrigger(false);

		this.list.forEach((child) => {
			if (coloredImages.includes(child.name)) {
				child.setTint(PLAYER_COLORS[this.property]);
			}
		});
		// @ts-ignore
		this.getByName("noseVfx").play("SuckFx_02");

		const vfx = this.list.find((child) => child.name === VFX_IMAGE);
		vfx.setVisible(false);
	}

	onPlayerTrigger(isDown) {
		const idleImage = this.list.find((child) => child.name === IDLE_IMAGE);
		const suckImage = this.list.find((child) => child.name === SUCK_IMAGE);

		idleImage.setVisible(!isDown);
		suckImage.setVisible(isDown);
		const vfx = this.list.find((child) => child.name === VFX_IMAGE);

		if (isDown) {
			vfx.setPosition(0, 400);
			vfx.setVisible(true);
			vfx.setAlpha(1);
			this.scene.tweens.killTweensOf(vfx);
			this.scene.tweens.add({
				targets: vfx,
				y: 100,
				alpha: 0,
				duration: 500,
				ease: 'Linear'
			});
		}

		const effect = this.list.find((child) => child.name === EFFECT_IMAGE);
		const touchedBody = getTouchingPhysicsElement(this.scene, effect);

		if (touchedBody?.body) {
			touchedBody.body.velocity.add({
				x: 0,
				y: isDown ? -100 : 200
			});
		}

	}

	// Write your code here.


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Nose };