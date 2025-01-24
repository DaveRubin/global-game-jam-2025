
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 63, y ?? 536);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// background_01
		const background_01 = scene.add.image(212, -1207, "Background_01");
		this.add(background_01);

		// background_02
		const background_02 = scene.add.image(200, -206, "Background_02");
		this.add(background_02);

		// bod_v01
		const bod_v01 = scene.add.image(165, 437, "Bod_v01");
		this.add(bod_v01);

		// checkpoint_v01
		const checkpoint_v01 = scene.add.image(237, -892, "Checkpoint_v01");
		this.add(checkpoint_v01);

		// wall_02
		const wall_02 = scene.add.image(539, -2272, "Wall_02");
		this.add(wall_02);

		// wall_01
		const wall_01 = scene.add.image(-906, -1500, "Wall_01");
		this.add(wall_01);

		// ref
		const ref = scene.add.image(3309, -777, "Ref");
		ref.scaleX = 3.2763175427054754;
		ref.scaleY = 3.2763175427054754;
		this.add(ref);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

export { Level };
