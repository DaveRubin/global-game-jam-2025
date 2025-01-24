
// You can write more code here

/* START OF COMPILED CODE */

class BadThought extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// arcadesprite_1
		const arcadesprite_1 = scene.physics.add.staticSprite(0, 0, "Obstacle_01");
		arcadesprite_1.scaleX = 0.666;
		arcadesprite_1.scaleY = 0.666;
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
		image_1.scaleX = 0.5;
		image_1.scaleY = 0.5;
		this.add(image_1);

		// Active
		const active = scene.add.container(0, 0);
		active.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(active);

		// Disabled
		const disabled = scene.add.container(0, 0);
		disabled.blendMode = Phaser.BlendModes.SKIP_CHECK;
		disabled.visible = false;
		this.add(disabled);

		// Cloud
		const cloud = scene.add.image(0, 0, "Obstacle_Empty");
		cloud.scaleX = 0.666;
		cloud.scaleY = 0.666;
		disabled.add(cloud);

		// image_2
		const image_2 = scene.add.image(0, 0, "Obstacle_Empty_Face");
		image_2.scaleX = 0.5;
		image_2.scaleY = 0.5;
		disabled.add(image_2);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	awake() {
		// @ts-ignore
		this.getByName("arcadesprite_1").play("Obstacle");
	}	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { BadThought };