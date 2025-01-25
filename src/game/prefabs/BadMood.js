
// You can write more code here
import {PLAYER_COLORS} from "../consts";
import {BaseCollider} from "../BaseCollider";
import {getPlayerTrigger} from "../getPlayerTrigger";
import {Head2} from "./Head2.js";

/* START OF COMPILED CODE */

class BadMood extends BaseCollider {

	constructor(scene, x, y) {
		super(scene, x ?? 252, y ?? 3);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.alpha = 0.8;

		// cloud
		const cloud = scene.add.sprite(-260, 0, "Cloud_B_01");
		cloud.name = "cloud";
		cloud.scaleX = 3;
		cloud.scaleY = 3;
		cloud.alpha = 0.8;
		cloud.alphaTopLeft = 0.8;
		cloud.alphaTopRight = 0.8;
		cloud.alphaBottomLeft = 0.8;
		cloud.alphaBottomRight = 0.8;
		cloud.tintFill = true;
		this.add(cloud);

		// collider
		const collider = scene.physics.add.sprite(-291, -107, "AOE");
		collider.name = "collider";
		collider.scaleX = 3.3;
		collider.scaleY = 3.2;
		collider.visible = false;
		collider.alpha = 0.8;
		collider.alphaTopLeft = 0.8;
		collider.alphaTopRight = 0.8;
		collider.alphaBottomLeft = 0.8;
		collider.alphaBottomRight = 0.8;
		collider.body.moves = false;
		collider.body.pushable = false;
		collider.body.immovable = true;
		collider.body.setSize(886, 331, false);
		this.add(collider);

		// angry
		const angry = scene.add.image(-308, -82, "ObstacleFace");
		angry.name = "angry";
		angry.scaleX = 2.5;
		angry.scaleY = 2.5;
		this.add(angry);

		// scar2
		const scar2 = scene.add.image(792, 44, "NoseVfx");
		scar2.name = "scar2";
		scar2.scaleX = 2.5;
		scar2.scaleY = 2.5;
		scar2.alpha = 0.8;
		scar2.alphaTopLeft = 0.8;
		scar2.alphaTopRight = 0.8;
		scar2.alphaBottomLeft = 0.8;
		scar2.alphaBottomRight = 0.8;
		this.add(scar2);

		// scar1
		const scar1 = scene.add.image(-1316, -115, "NoseVfx");
		scar1.name = "scar1";
		scar1.scaleX = 2.5;
		scar1.scaleY = 2.5;
		scar1.alpha = 0.8;
		scar1.alphaTopLeft = 0.8;
		scar1.alphaTopRight = 0.8;
		scar1.alphaBottomLeft = 0.8;
		scar1.alphaBottomRight = 0.8;
		this.add(scar1);

		// content
		const content = scene.add.image(-309, -62, "Obstacle_Empty_Face");
		content.name = "content";
		content.scaleX = 2.5;
		content.scaleY = 2.5;
		content.visible = false;
		content.alpha = 0.8;
		content.alphaTopLeft = 0.8;
		content.alphaTopRight = 0.8;
		content.alphaBottomLeft = 0.8;
		content.alphaBottomRight = 0.8;
		this.add(content);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {"p1"|"p2"|"p3"|"p4"} */
	player = "";
	/** @type {number} */
	dragInside = 100;

	/* START-USER-CODE */

	awake() {
		const wall = this.getByName("cloud");
		wall.play("Cloud_B");
		super.awake();
		wall.setTint(PLAYER_COLORS[this.player]);

		this.collider = this.getByName("collider");

		getPlayerTrigger(this.scene, this.player, (isDown) => this.onPlayerTrigger(isDown));
		this.setFace(false);

		this.scene.events.on('update', (time, deltaTime) => this.update(time, deltaTime));
	}

	update(time, deltaTime) {
		if (this.scene.physics.overlap(this.collider.body, Head2.instance)) {
			Head2.instance.body.drag.y = this.dragInside;
		}
	}

	setFace(isCalm) {
		this.getByName("content").setVisible(isCalm);
		this.getByName("angry").setVisible(!isCalm);
		this.getByName("scar1").setVisible(!isCalm);
		this.getByName("scar2").setVisible(!isCalm);
	}

	onPlayerTrigger(isDown) {
		this.setFace(isDown);

		const collider = this.getByName("collider");
		collider.body.checkCollision.down = !isDown;
		if (this.scene.physics.overlap(collider.body, Head2.instance)) {
			if (!isDown) {
				Head2.instance.kill();
			}
		}

		const wall = this.getByName("cloud");
		if (isDown) {
			this.scene.tweens.add({
				targets: wall,
				alpha: 0.2,
				duration: 0.35,
				ease: 'Sine.out'
			});
		}
		else {
			this.scene.tweens.add({
				targets: wall,
				alpha: 0.75,
				duration: 0.35,
				ease: 'Sine.out'
			});
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here


export {BadMood}