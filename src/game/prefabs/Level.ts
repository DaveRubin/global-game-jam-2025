
// You can write more code here

import { Wall1 } from "./Wall1";
import { Mouth } from "./Mouth";
import { Rainbow } from "./Rainbow";
import { Nose } from "./Nose";
import { Head } from "./Head";
import { Wall2 } from "./Wall2";
/* START OF COMPILED CODE */

class Level extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// background_01
		const background_01 = scene.add.image(0, 108, "Background_01");
		background_01.setOrigin(0, 0);
		this.add(background_01);

		// bod_v01
		const bod_v01 = scene.add.image(534, 2293, "Bod_v01");
		this.add(bod_v01);

		// ref
		const ref = scene.add.image(3309, -2289, "Ref");
		ref.scaleX = 4;
		ref.scaleY = 4;
		this.add(ref);

		// wall1
		const wall1 = new Wall1(scene, 2345, -2024);
		wall1.scaleX = 1;
		wall1.scaleY = 1;
		this.add(wall1);

		// wall
		const wall = new Wall1(scene, 4151, -2024);
		this.add(wall);

		// rainbow
		const rainbow = new Rainbow(scene, 0, 1237);
		this.add(rainbow);

		// background_02
		const background_02 = scene.add.image(0, -1106, "Background_02");
		background_02.setOrigin(0, 0);
		this.add(background_02);

		// nose
		const nose = new Nose(scene, 117, 894);
		this.add(nose);

		// nose_1
		const nose_1 = new Nose(scene, 420, 905);
		this.add(nose_1);

		// nose_2
		const nose_2 = new Nose(scene, 690, 896);
		this.add(nose_2);

		// nose_3
		const nose_3 = new Nose(scene, 949, 899);
		this.add(nose_3);

		// mouth_1
		const mouth_1 = new Mouth(scene, 68, 1390);
		mouth_1.scaleX = 1;
		mouth_1.scaleY = 1;
		this.add(mouth_1);

		// mouth_2
		const mouth_2 = new Mouth(scene, 1050, 1687);
		this.add(mouth_2);

		// mouth_3
		const mouth_3 = new Mouth(scene, 962, 628);
		this.add(mouth_3);

		// mouth
		const mouth = new Mouth(scene, 235, 651);
		this.add(mouth);

		// head
		const head = new Head(scene, 538, 2045);
		this.add(head);

		// wall2
		const wall2 = new Wall2(scene, 799, 1617);
		this.add(wall2);

		// wall_1
		const wall_1 = new Wall1(scene, 294, 501);
		this.add(wall_1);

		// badThought
		const badThought = new BadThought(scene, 296, 1781);
		this.add(badThought);

		// nose (prefab fields)
		nose.property = "p1";

		// nose_1 (prefab fields)
		nose_1.property = "p2";

		// nose_2 (prefab fields)
		nose_2.property = "p3";

		// nose_3 (prefab fields)
		nose_3.property = "p4";

		// mouth_1 (prefab fields)
		mouth_1.property = "p1";

		// mouth_2 (prefab fields)
		mouth_2.property = "p2";

		// mouth_3 (prefab fields)
		mouth_3.property = "p3";

		// mouth (prefab fields)
		mouth.property = "p4";

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