
// You can write more code here
import {Wall2} from "./Wall2.js";
import {Wall1} from "./Wall1.js";
import {Collectible3} from "./Collectible3.js";
import {Mouth} from "./Mouth.js";
import {Collectible2} from "./Collectible2.js";
import {Collectible1} from "./Collectible1.js";
import {Head2} from "./Head2.js";
import {BadThought} from "./BadThought.js";
import {Rainbow} from "./Rainbow.js";

/* START OF COMPILED CODE */

class Level_One extends Phaser.GameObjects.Layer {

	constructor(scene) {
		super(scene);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// container_3
		const container_3 = scene.add.container(-5, -3792);
		container_3.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(container_3);

		// background
		const background = scene.add.image(0, 964, "Background_01");
		background.setOrigin(0, 0);
		container_3.add(background);

		// background_01
		const background_01 = scene.add.image(0, 3906, "Background_01");
		background_01.setOrigin(0, 0);
		container_3.add(background_01);

		// background_02
		const background_02 = scene.add.image(0, 2692, "Background_02");
		background_02.setOrigin(0, 0);
		container_3.add(background_02);

		// background_1
		const background_1 = scene.add.image(0, 0, "Background_02");
		background_1.setOrigin(0, 0);
		container_3.add(background_1);

		// player
		const player = scene.add.container(528, 2093);
		player.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(player);

		// bod_v01
		const bod_v01 = scene.add.image(6, 200, "Bod_v01");
		player.add(bod_v01);

		// head2
		const head2 = new Head2(scene, 0, 0);
		head2.scaleX = 0.7;
		head2.scaleY = 0.7;
		player.add(head2);

		// beginningClouds
		const beginningClouds = scene.add.container(-22, 1303);
		beginningClouds.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(beginningClouds);

		// wall_1
		const wall_1 = new Wall1(scene, 25, 0);
		wall_1.scaleX = 0.4;
		wall_1.scaleY = 0.4;
		beginningClouds.add(wall_1);

		// wall_2
		const wall_2 = new Wall1(scene, 0, 173);
		wall_2.scaleX = 0.2;
		wall_2.scaleY = 0.2;
		beginningClouds.add(wall_2);

		// wall_8
		const wall_8 = new Wall1(scene, 1096, 13);
		wall_8.scaleX = -0.4;
		wall_8.scaleY = 0.4;
		beginningClouds.add(wall_8);

		// wall2
		const wall2 = new Wall2(scene, 1106, 167);
		wall2.scaleX = 0.25;
		wall2.scaleY = 0.25;
		beginningClouds.add(wall2);

		// rainbow1
		const rainbow1 = scene.add.container(-22, -8012);
		rainbow1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(rainbow1);

		// wall1
		const wall1 = new Wall1(scene, 551, 6054);
		wall1.scaleX = 1;
		wall1.scaleY = 1;
		rainbow1.add(wall1);

		// wall
		const wall = new Wall1(scene, 542, 7448);
		wall.scaleX = -0.2;
		wall.scaleY = 0.2;
		rainbow1.add(wall);

		// rainbow
		const rainbow = new Rainbow(scene, 0, 0);
		rainbow1.add(rainbow);

		// mouth_1
		const mouth_1 = new Mouth(scene, 76, 7588);
		mouth_1.scaleX = -1;
		mouth_1.scaleY = 1;
		rainbow1.add(mouth_1);

		// mouth_2
		const mouth_2 = new Mouth(scene, 1037, 7596);
		rainbow1.add(mouth_2);

		// collectible2
		const collectible2 = new Collectible2(scene, 542, 8634);
		rainbow1.add(collectible2);

		// badThought
		const badThought = new BadThought(scene, 2392, 9184);
		rainbow1.add(badThought);

		// mouth_4
		const mouth_4 = new Mouth(scene, 82, 8136);
		mouth_4.scaleX = -1;
		mouth_4.scaleY = 1;
		rainbow1.add(mouth_4);

		// mouth_5
		const mouth_5 = new Mouth(scene, 1073, 8152);
		rainbow1.add(mouth_5);

		// collectible_1
		const collectible_1 = new Collectible3(scene, 549, 8380);
		rainbow1.add(collectible_1);

		// collectible_2
		const collectible_2 = new Collectible1(scene, 553, 8124);
		rainbow1.add(collectible_2);

		// collectible_3
		const collectible_3 = new Collectible2(scene, 537, 7772);
		rainbow1.add(collectible_3);

		// mouth_6
		const mouth_6 = new Mouth(scene, 67, 6541);
		mouth_6.scaleX = -1;
		mouth_6.scaleY = 1;
		rainbow1.add(mouth_6);

		// mouth_7
		const mouth_7 = new Mouth(scene, 1014, 6557);
		rainbow1.add(mouth_7);

		// wall_3
		const wall_3 = new Wall2(scene, 97, 6302);
		wall_3.scaleX = -0.4;
		wall_3.scaleY = 0.4;
		wall_3.angle = 0;
		rainbow1.add(wall_3);

		// wall_4
		const wall_4 = new Wall2(scene, 999, 6310);
		wall_4.scaleX = 0.4;
		wall_4.scaleY = 0.4;
		wall_4.angle = 0;
		rainbow1.add(wall_4);

		// wall_5
		const wall_5 = new Wall1(scene, 560, 5731);
		wall_5.scaleX = 1;
		wall_5.scaleY = 1;
		rainbow1.add(wall_5);

		// wall_6
		const wall_6 = new Wall1(scene, 537, 5407);
		wall_6.scaleX = 1;
		wall_6.scaleY = 1;
		rainbow1.add(wall_6);

		// wall_7
		const wall_7 = new Wall1(scene, 506, 5069);
		wall_7.scaleX = 1;
		wall_7.scaleY = 1;
		rainbow1.add(wall_7);

		// wall_9
		const wall_9 = new Wall1(scene, 1144, 7925);
		wall_9.scaleX = -0.2;
		wall_9.scaleY = 0.2;
		rainbow1.add(wall_9);

		// wall_10
		const wall_10 = new Wall1(scene, 29, 7928);
		wall_10.scaleX = 0.2;
		wall_10.scaleY = 0.2;
		rainbow1.add(wall_10);

		// collectible
		const collectible = new Collectible1(scene, 541, 8886);
		rainbow1.add(collectible);

		// collectible_4
		const collectible_4 = new Collectible2(scene, 901, 7171);
		rainbow1.add(collectible_4);

		// collectible_5
		const collectible_5 = new Collectible1(scene, 910, 6910);
		rainbow1.add(collectible_5);

		// collectible_6
		const collectible_6 = new Collectible3(scene, 186, 7199);
		rainbow1.add(collectible_6);

		// collectible_7
		const collectible_7 = new Collectible2(scene, 176, 6904);
		rainbow1.add(collectible_7);

		// rainbow (prefab fields)
		rainbow.text = "150m";

		// mouth_1 (prefab fields)
		mouth_1.property = "p3";

		// mouth_2 (prefab fields)
		mouth_2.property = "p2";

		// mouth_4 (prefab fields)
		mouth_4.property = "p1";

		// mouth_5 (prefab fields)
		mouth_5.property = "p4";

		// mouth_6 (prefab fields)
		mouth_6.property = "p4";

		// mouth_7 (prefab fields)
		mouth_7.property = "p1";

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
export {Level_One}