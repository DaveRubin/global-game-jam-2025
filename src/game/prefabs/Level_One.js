
// You can write more code here
import { Wall2 } from "./Wall2.js";
import { Collectible1 } from "./Collectible1.js";
import { Wall1 } from "./Wall1.js";
import { Collectible3 } from "./Collectible3.js";
import { Collectible2 } from "./Collectible2.js";
import { Mouth } from "./Mouth.js";
import { Nose } from "./Nose.js";
import { BadThought } from "./BadThought.js";
import { Head2 } from "./Head2.js";
import { Rainbow } from "./Rainbow.js";



/* START OF COMPILED CODE */



class Level_One extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// bod_v01
		const bod_v01 = scene.add.image(586, 2293, "Bod_v01");
		this.add(bod_v01);

		// rainbow
		const rainbow = new Rainbow(scene, 0, -4365);
		this.add(rainbow);

		// mouth_1
		const mouth_1 = new Mouth(scene, 1054, -533);
		mouth_1.scaleX = 1;
		mouth_1.scaleY = 1;
		this.add(mouth_1);

		// mouth_2
		const mouth_2 = new Mouth(scene, -990, 436);
		mouth_2.scaleX = 0.5;
		mouth_2.scaleY = 0.5;
		this.add(mouth_2);

		// mouth_3
		const mouth_3 = new Mouth(scene, -990, 436);
		mouth_3.scaleX = 0.5;
		mouth_3.scaleY = 0.5;
		this.add(mouth_3);

		// mouth
		const mouth = new Mouth(scene, -718, 850);
		mouth.scaleX = 0.5;
		mouth.scaleY = 0.5;
		this.add(mouth);

		// head
		const head = new Head2(scene, 586, 2055);
		this.add(head);

		// wall2
		const wall2 = new Wall2(scene, 545, -747);
		wall2.scaleX = 0.3;
		wall2.scaleY = 0.3;
		wall2.angle = 0;
		wall2.flipX = true;
		wall2.flipY = false;
		this.add(wall2);

		// wall_1
		const wall_1 = new Wall1(scene, -122, 1103);
		wall_1.scaleX = 0.45;
		wall_1.scaleY = 0.45;
		this.add(wall_1);

		// collectible2
		const collectible2 = new Collectible2(scene, 561, 54);
		collectible2.scaleX = 0.5;
		collectible2.scaleY = 0.5;
		this.add(collectible2);

		// collectible3
		const collectible3 = new Collectible3(scene, -1210, -101);
		collectible3.scaleX = 0.5;
		collectible3.scaleY = 0.5;
		this.add(collectible3);

		// collectible1
		const collectible1 = new Collectible1(scene, 561, 603);
		collectible1.scaleX = 0.5;
		collectible1.scaleY = 0.5;
		this.add(collectible1);

		// badThought
		const badThought = new BadThought(scene, -1660, 313);
		badThought.scaleX = 0.5;
		badThought.scaleY = 0.5;
		this.add(badThought);

		// nose_4
		const nose_4 = new Nose(scene, 2616, 248);
		this.add(nose_4);

		// collectible
		const collectible = new Collectible3(scene, 569, 1049);
		collectible.scaleX = 0.5;
		collectible.scaleY = 0.5;
		this.add(collectible);

		// mouth_4
		const mouth_4 = new Mouth(scene, 1070, -1411);
		mouth_4.scaleX = 1;
		mouth_4.scaleY = 1;
		this.add(mouth_4);

		// mouth_5
		const mouth_5 = new Mouth(scene, 46, -1411);
		mouth_5.scaleX = -1;
		mouth_5.scaleY = 1;
		this.add(mouth_5);

		// mouth_6
		const mouth_6 = new Mouth(scene, 35, -533);
		mouth_6.scaleX = -1;
		mouth_6.scaleY = 1;
		this.add(mouth_6);

		// wall
		const wall = new Wall2(scene, 143, -1575);
		wall.scaleX = 0.3;
		wall.scaleY = 0.3;
		wall.angle = 0;
		wall.flipX = true;
		wall.flipY = false;
		this.add(wall);

		// wall_2
		const wall_2 = new Wall2(scene, 945, -1575);
		wall_2.scaleX = 0.3;
		wall_2.scaleY = 0.3;
		wall_2.angle = 0;
		wall_2.flipX = true;
		wall_2.flipY = false;
		this.add(wall_2);

		// collectible_1
		const collectible_1 = new Collectible2(scene, 532, -1488);
		collectible_1.scaleX = 0.5;
		collectible_1.scaleY = 0.5;
		collectible_1.angle = 72;
		this.add(collectible_1);

		// collectible_3
		const collectible_3 = new Collectible1(scene, 177, -973);
		collectible_3.scaleX = 0.5;
		collectible_3.scaleY = 0.5;
		this.add(collectible_3);

		// collectible_4
		const collectible_4 = new Collectible3(scene, 540, -1981);
		collectible_4.scaleX = 0.5;
		collectible_4.scaleY = 0.5;
		this.add(collectible_4);

		// collectible_5
		const collectible_5 = new Collectible1(scene, 928, -972);
		collectible_5.scaleX = 0.5;
		collectible_5.scaleY = 0.5;
		collectible_5.angle = 91;
		this.add(collectible_5);

		// wall_3
		const wall_3 = new Wall1(scene, 1252, 460);
		wall_3.scaleX = -0.5;
		wall_3.scaleY = 0.5;
		this.add(wall_3);

		// collectible_6
		const collectible_6 = new Collectible1(scene, 565, 1539);
		collectible_6.scaleX = 0.5;
		collectible_6.scaleY = 0.5;
		collectible_6.angle = 50;
		this.add(collectible_6);

		// wall_6
		const wall_6 = new Wall2(scene, 1136, 685);
		wall_6.scaleX = 0.25;
		wall_6.scaleY = 0.25;
		this.add(wall_6);

		// rainbow (prefab fields)
		rainbow.text = "250m";

		// mouth_1 (prefab fields)
		mouth_1.property = "p2";

		// mouth_2 (prefab fields)
		mouth_2.property = "p2";

		// mouth_3 (prefab fields)
		mouth_3.property = "p3";

		// mouth (prefab fields)
		mouth.property = "p4";

		// mouth_4 (prefab fields)
		mouth_4.property = "p1";

		// mouth_5 (prefab fields)
		mouth_5.property = "p4";

		// mouth_6 (prefab fields)
		mouth_6.property = "p3";

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

export { Level_One };
