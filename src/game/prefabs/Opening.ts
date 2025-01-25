
// You can write more code here

import { PlayerOpeningIndication } from "./PlayerOpeningIndication";

/* START OF COMPILED CODE */

class Opening extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// P1_
		const p1_ = new PlayerOpeningIndication(scene, -164, 240);
		p1_.name = "P1_";
		this.add(p1_);

		// P2_
		const p2_ = new PlayerOpeningIndication(scene, -47, 240);
		p2_.name = "P2_";
		this.add(p2_);

		// P3_
		const p3_ = new PlayerOpeningIndication(scene, 57, 240);
		p3_.name = "P3_";
		this.add(p3_);

		// P4_
		const p4_ = new PlayerOpeningIndication(scene, 161, 240);
		p4_.name = "P4_";
		this.add(p4_);

		// Frame
		const frame = scene.add.image(0, 258, "GridFrame");
		frame.scaleX = 0.5;
		frame.scaleY = 0.5;
		this.add(frame);

		// Go Container
		const go_Container = scene.add.container(-218, 351);
		go_Container.blendMode = Phaser.BlendModes.SKIP_CHECK;
		go_Container.visible = false;
		this.add(go_Container);

		// Bar
		const bar = scene.add.image(217, 19, "ReadyBox");
		bar.scaleX = 1.85;
		bar.scaleY = 0.5;
		go_Container.add(bar);

		// Go_Text
		const go_Text = scene.add.image(215, 20, "GoTitle");
		go_Text.scaleX = 0.5;
		go_Text.scaleY = 0.5;
		go_Container.add(go_Text);

		// C2A
		const c2A = scene.add.image(0, -129, "C2A");
		c2A.scaleX = 0.5;
		c2A.scaleY = 0.5;
		this.add(c2A);

		// logo
		const logo = scene.add.image(1, -377, "Logo");
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