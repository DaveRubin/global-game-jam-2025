
// You can write more code here

import { GAME_WIDTH } from "../consts";
import { GameScene } from "../GameScene";

/* START OF COMPILED CODE */

class Head2 extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.scaleX = 0.5;
		this.scaleY = 0.5;

		// head_Idle
		const head_Idle = scene.add.image(0, 0, "Head_Idle");
		head_Idle.name = "head_Idle";
		head_Idle.scaleX = 0.5;
		head_Idle.scaleY = 0.5;
		this.add(head_Idle);

		// death_01
		const death_01 = scene.add.sprite(0, 0, "Death_01");
		death_01.name = "death_01";
		death_01.scaleX = 0.5;
		death_01.scaleY = 0.5;
		this.add(death_01);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		scene.physics.add.existing(this);
		this.body.friction.x = 0;
		this.body.friction.y = 0;
		this.body.bounce.x = 0.5;
		this.body.bounce.y = 0.5;
		this.body.setOffset(-150, -150);
		this.body.setCircle(150);
		this.body.onCollide = true;
		this.body.onOverlap = true;
		this.body.allowDrag = true;

		// Create boundaries
		const leftBoundary = scene.add.rectangle(GAME_WIDTH, 0, 10, 800000);
		const rightBoundary = scene.add.rectangle(-10, 0, 10, 800000);


		// Add physics to boundaries (true makes them static)
		scene.physics.add.existing(leftBoundary, true);
		scene.physics.add.existing(rightBoundary, true);

		// Add collision between head and boundaries
		scene.physics.add.collider(this, [leftBoundary, rightBoundary]);

		Head2.instance = this;
		death_01.setVisible(false);
		const body = this.body;
		// body.setMaxVelocity(300, 80);
		this.initialPosition = { x: this.x, y: this.y };

		// Add update event listener for logging position each frame
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	static instance;
	initialPosition = { x: 0, y: 0 };

	start() {
		const head = this.getByName("head_Idle");
		this.scene.time.delayedCall(200, () => {
			head.setTexture("Head_Idle");
		});

		this.scene.tweens.add({
			targets: head,
			scale: 0.5,
			y: 0,
			duration: 1500,
			ease: 'Bounce.easeOut',
			onComplete: () => {
				this.body.setAllowGravity(true)
			}
		});

	}

	awake() {
		const head = this.getByName("head_Idle");
		head.setTexture("HeadBefore Start");
		head.setScale(0.2);
		head.y += 150;

		this.body.setDragX(70);

		// Create a looping rotation tween
		this.scene.tweens.add({
			targets: this.getByName("head_Idle"),
			duration: 1500,
			yoyo: true,
			repeat: -1,
			ease: 'Sine.easeInOut',
			angle: { from: -20, to: 20 }
		});
		// Check for overlaps with other physics objects
		// Enable checking if body is overlapping

		this.getByName("death_01").setVisible(false);
		this.getByName("death_01").play("Death");
		this.updateEvent = this.scene.events.on('update', () => {
			if (!this.body) {
				return;
			}
			const velocityX = this.body.velocity.x;
			const velocityY = this.body.velocity.y;
			const MAX_VELOCITY_Y = 60;
			const MAX_VELOCITY_X = 150;
			if (Math.abs(velocityY) > MAX_VELOCITY_Y) {
				const delta = velocityY - MAX_VELOCITY_Y * Math.sign(velocityY);
				this.body.velocity.y -= delta / 16;
			}
			if (Math.abs(velocityX) > MAX_VELOCITY_X) {
				const delta = velocityX - MAX_VELOCITY_X * Math.sign(velocityX);
				this.body.velocity.x -= delta / 16;
			}
		});
	}



	async kill(skipAnimation) {
		this.scene.sound.play("DeathShort");

		if (!skipAnimation) {
			this.getByName("death_01").setVisible(true);
			this.getByName("death_01").once('animationcomplete', () => {
				this.getByName("death_01").setVisible(false);
			});
			this.getByName("death_01").play("Death");
			this.getByName("head_Idle").setVisible(false);
		}
		console.log("OFF");
		this.scene.events.off('update', this.updateEvent);
		await GameScene.instance.resetGame();
		this.reset();
	}

	async reset() {
		this.getByName("head_Idle").setVisible(true);
		this.setPosition(this.initialPosition.x, this.initialPosition.y);
		const headIdle = this.getByName("head_Idle");
		headIdle.setScale(0);
		await new Promise(resolve => {
			this.scene.tweens.add({
				targets: headIdle,
				scaleX: 0.5,
				scaleY: 0.5,
				duration: 400,
				ease: 'Back.out',
				onComplete: () => {
					resolve();
				}
			});
		});
		this.getByName("death_01").setVisible(false);
		GameScene.instance.reloadLevel();
	}

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { Head2 };
