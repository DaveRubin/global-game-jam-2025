
// You can write more code here

/* START OF COMPILED CODE */

class BadThought extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 343, y ?? 322);

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
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	awake() {

		this.getByName("arcadesprite_1").play("Obstacle");

		// Add the enemy sprite
		const enemy = this.scene.add.sprite(400, 300, 'enemyTexture');
		this.add(enemy);


		// Define a Bezier curve path for a "smile" shape
		const bezierCurve = {
			start: { x: 200, y: 400 }, // Starting point
			control1: { x: 400, y: 200 }, // Control point (top of the smile)
			control2: { x: 600, y: 200 }, // Second control point
			end: { x: 800, y: 400 } // End point
		};

		// Use a tween to move the enemy along the Bezier curve
		this.scene.tweens.add({
			targets: enemy,
			x: {
				getStart: () => bezierCurve.start.x,
				getEnd: () => bezierCurve.end.x
			},
			y: {
				getStart: () => bezierCurve.start.y,
				getEnd: () => bezierCurve.end.y,
				getInterpolation: (v) => {
					// Calculate the Bezier curve value based on progress (v)
					return Phaser.Math.Bezier.Interpolation(
						v,
						[
							bezierCurve.start.y,
							bezierCurve.control1.y,
							bezierCurve.control2.y,
							bezierCurve.end.y
						]
					);
				}
			},
			duration: 3000, // Duration of the animation (in ms)
			ease: 'Sine.easeInOut', // Easing: slower at edges, faster in the middle
			repeat: -1, // Repeat forever
			yoyo: true // Reverse the motion after each cycle
		});

	}	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { BadThought };