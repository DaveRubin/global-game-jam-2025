
// You can write more code here

/* START OF COMPILED CODE */

class CollectedParticle extends Phaser.GameObjects.Particles.ParticleEmitter {

	constructor(scene, x, y, texture, config) {
		super(scene, x ?? 0, y ?? 7, texture || "bubble", { ...{ "scale": { "start": 0.2, "end": 0, "ease": "Linear", "random": true }, "speed": { "min": 10, "max": 300, "int": false }, "lifespan": 1000, "quantity": 100, "alpha": { "start": 1, "end": 0, "ease": "Linear", "random": false }, "blendMode": 3, "stopAfter": 15, "frequency": 100, "gravityY": 100 }, ...config });

		this.blendMode = Phaser.BlendModes.SCREEN;

		/* START-USER-CTR-CODE */

		setTimeout(() => {
			this.destroy();
		}, 3000);
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

export { CollectedParticle };