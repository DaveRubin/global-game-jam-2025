
// You can write more code here
import { Head2 } from "./Head2";
import {createTween} from "../tweenFactory";

/* START OF COMPILED CODE */

class BadThought extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.scaleX = 0.5;
		this.scaleY = 0.5;

		// arcadesprite_1
		const arcadesprite_1 = scene.physics.add.staticSprite(0, 0, "Obstacle_01");
		arcadesprite_1.name = "arcadesprite_1";
		arcadesprite_1.tintTopLeft = 14421255;
		arcadesprite_1.tintTopRight = 14421255;
		arcadesprite_1.tintBottomLeft = 14421255;
		arcadesprite_1.tintBottomRight = 14421255;
		arcadesprite_1.body.allowGravity = false;
		arcadesprite_1.body.setSize(421, 542, false);
		this.add(arcadesprite_1);

		// image_1
		const image_1 = scene.add.image(-20, 23, "ObstacleFace");
		this.add(image_1);

		// Active
		const active = scene.add.container(-343, -322);
		active.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(active);

		// Disabled
		const disabled = scene.add.container(-343, -322);
		disabled.blendMode = Phaser.BlendModes.SKIP_CHECK;
		disabled.visible = false;
		this.add(disabled);

		// Cloud
		const cloud = scene.add.image(347, 322, "Obstacle_Empty");
		disabled.add(cloud);

		// image_2
		const image_2 = scene.add.image(320, 329, "Obstacle_Empty_Face");
		disabled.add(image_2);

		// collider
		const collider = scene.physics.add.sprite(0, 0, "_MISSING");
		collider.name = "collider";
		collider.scaleX = 8;
		collider.scaleY = 8;
		collider.visible = false;
		collider.body.moves = false;
		collider.body.allowGravity = false;
		collider.body.allowDrag = false;
		collider.body.allowRotation = false;
		collider.body.pushable = false;
		collider.body.setCircle(64);
		this.add(collider);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
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

	/* START-USER-CODE */
	awake() {
		// @ts-ignore
		this.getByName("arcadesprite_1").play("Obstacle");

		createTween(this.scene, this, new Phaser.Math.Vector2(this.offsetX, this.offsetY), {
			delay: this.moveDelay,
			moveDuration: this.moveDuration,
		});

		// Add the enemy sprite
		const enemyWhat = this.scene.add.sprite(400, 300, 'enemyTexture');
		const enemy = this.add(enemyWhat);
		const collider = this.getByName("collider");
		const body = collider.body;
		if (body) {
			body.setSize(this.width, this.height, false);
			body.onCollide = true;
		}
		const colliderEvent = this.scene.physics.add.collider(Head2.instance, collider, () => {
			console.log("collide");
			Head2.instance.kill();
			colliderEvent.destroy();

		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { BadThought };