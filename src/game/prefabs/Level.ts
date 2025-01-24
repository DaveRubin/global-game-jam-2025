
// You can write more code here

import { Wall1 } from "./Wall1";
import { Mouth } from "./Mouth";
import { Rainbow } from "./Rainbow";
/* START OF COMPILED CODE */

class Level extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// background_01
		const background_01 = scene.add.image(0, 108, "Background_01");
		background_01.setOrigin(0, 0);
		this.add(background_01);

		// background_02
		const background_02 = scene.add.image(0, -1106, "Background_02");
		background_02.setOrigin(0, 0);
		this.add(background_02);

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

		// mouth
		const mouth = new Mouth(scene, 5107, -1570);
		this.add(mouth);

		// rainbow
		const rainbow = new Rainbow(scene, 0, 1237);
		this.add(rainbow);

		// mouth (prefab fields)
		mouth.property = "p3";

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