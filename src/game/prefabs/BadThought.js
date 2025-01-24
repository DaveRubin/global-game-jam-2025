
// You can write more code here

/* START OF COMPILED CODE */

class BadThought extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 343, y ?? 322);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

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