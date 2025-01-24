import { PLAYER_COLORS } from "../consts";
import { getPlayerTrigger } from "../getPlayerTrigger";

// You can write more code here

const SUCK_IMAGE = "noseSuck";
const IDLE_IMAGE = "noseIdle";
const VFX_IMAGE = "noseVfx";
export const coloredImages = [SUCK_IMAGE, IDLE_IMAGE, VFX_IMAGE];

/* START OF COMPILED CODE */

class Nose extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// effect
		const effect = scene.add.rectangle(0, 0, 128, 128);
		effect.scaleX = 3.25;
		effect.angle = -90;
		effect.setOrigin(1, 0.5);
		effect.isFilled = true;
		effect.fillColor = 16776960;
		effect.fillAlpha = 0.4;
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
		const noseVfx = scene.add.image(-2, 197, "NoseVfx");
		noseVfx.name = "noseVfx";
		noseVfx.scaleX = 0.5;
		noseVfx.scaleY = 0.5;
		this.add(noseVfx);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	public property: "p1" | "p2" | "p3" | "p4" = "p1";

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

	onPlayerTrigger(isDown: boolean) {
		const idleImage = this.list.find((child) => child.name === IDLE_IMAGE) as Phaser.GameObjects.Image;
		const suckImage = this.list.find((child) => child.name === SUCK_IMAGE) as Phaser.GameObjects.Image;

		idleImage.setVisible(!isDown);
		suckImage.setVisible(isDown);
		const vfx = this.list.find((child) => child.name === VFX_IMAGE) as Phaser.GameObjects.Image;

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
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Nose };