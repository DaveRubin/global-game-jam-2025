
// You can write more code here

/* START OF COMPILED CODE */

class WallVertical extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 306, y ?? 196);

		this.angle = 90;
		this.alpha = 0.8;

		// wall
		const wall = scene.add.image(0, 0, "Wall_01");
		wall.name = "wall";
		wall.alpha = 0.8;
		wall.alphaTopLeft = 0.8;
		wall.alphaTopRight = 0.8;
		wall.alphaBottomLeft = 0.8;
		wall.alphaBottomRight = 0.8;
		this.add(wall);

		// arcadesprite_1
		const arcadesprite_1 = scene.physics.add.sprite(0, -6, "_MISSING");
		arcadesprite_1.scaleX = 21.8;
		arcadesprite_1.scaleY = 4.45;
		arcadesprite_1.visible = false;
		arcadesprite_1.alpha = 0.8;
		arcadesprite_1.alphaTopLeft = 0.8;
		arcadesprite_1.alphaTopRight = 0.8;
		arcadesprite_1.alphaBottomLeft = 0.8;
		arcadesprite_1.alphaBottomRight = 0.8;
		arcadesprite_1.body.moves = false;
		arcadesprite_1.body.allowGravity = false;
		arcadesprite_1.body.allowDrag = false;
		arcadesprite_1.body.allowRotation = false;
		arcadesprite_1.body.pushable = false;
		arcadesprite_1.body.immovable = true;
		arcadesprite_1.body.setSize(32, 32, false);
		this.add(arcadesprite_1);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	awake() {
		const wall = this.getByName("wall");
		wall.play("Cloud_A");
		super.awake();
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
