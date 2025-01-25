
// You can write more code here

/* START OF COMPILED CODE */

class HUD extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// text
		const text = scene.add.text(134, 14, "", {});
		text.name = "text";
		text.scaleX = 1.540275387603872;
		text.scaleY = 1.540275387603872;
		text.text = "0";
		text.setStyle({ "fontSize": "72px" });
		this.add(text);

		// pickUp_02
		const pickUp_02 = scene.add.image(68, 70, "PickUp_02");
		pickUp_02.scaleX = 0.23769132803317172;
		pickUp_02.scaleY = 0.23769132803317172;
		this.add(pickUp_02);
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		// Write your code here.
		HUD.instance = this;
		this.setScrollFactor(0);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
	static instance;
	static score = 0;
	confetti;
	awake() {
		this.confetti = this.scene.add.particles(0, 0, 'raster', {
			speed: 200,
			lifespan: 5000,
			gravityY: 200,
			frequency: 50,
			quantity: 30,
			frame: [0, 4, 8, 12, 16],
			x: { min: 0, max: 800 },
			scaleX: {
				onEmit: (particle) => {
					return -1.0
				},
				onUpdate: (particle) => {
					return (particle.scaleX > 1.0 ? -1.0 : particle.scaleX + 0.05)
				}
			},
			rotate: {
				onEmit: (particle) => {
					return 0
				},
				onUpdate: (particle) => {
					return particle.angle + 1
				}
			}
		});
		this.add(this.confetti);
		this.confetti.stop();
	}

	playConfetti() {
		this.confetti.start();
		setTimeout(() => {
			this.confetti.stop();
		}, 1000);
	}

	collected() {
		HUD.score++;
		this.updateText();
	}

	reset() {
		HUD.score = 0;
		this.updateText();
	}

	updateText() {
		const text = this.getByName("text");
		text.text = HUD.score;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
export { HUD };