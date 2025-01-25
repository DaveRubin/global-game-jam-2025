
// You can write more code here

import { PlayerOpeningIndication } from "./PlayerOpeningIndication";

/* START OF COMPILED CODE */

class Opening extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// P1_
		const p1_ = new PlayerOpeningIndication(scene, 73, 813);
		p1_.name = "P1_";
		this.add(p1_);

		// P2_
		const p2_ = new PlayerOpeningIndication(scene, 190, 813);
		p2_.name = "P2_";
		this.add(p2_);

		// P3_
		const p3_ = new PlayerOpeningIndication(scene, 294, 813);
		p3_.name = "P3_";
		this.add(p3_);

		// P4_
		const p4_ = new PlayerOpeningIndication(scene, 398, 813);
		p4_.name = "P4_";
		this.add(p4_);

		// Frame
		const frame = scene.add.image(237, 831, "GridFrame");
		frame.scaleX = 0.5;
		frame.scaleY = 0.5;
		this.add(frame);

		// C2A
		const c2A = scene.add.image(237, 444, "C2A");
		c2A.scaleX = 0.5;
		c2A.scaleY = 0.5;
		this.add(c2A);

		// logo
		const logo = scene.add.image(238, 196, "Logo");
		logo.scaleX = 0.5;
		logo.scaleY = 0.5;
		this.add(logo);

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

export { Opening };