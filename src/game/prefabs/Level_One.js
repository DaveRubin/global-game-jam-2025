
// You can write more code here
import {Wall2} from "./Wall2.js";
import {Wall1} from "./Wall1.js";
import {Collectible3} from "./Collectible3.js";
import {Mouth} from "./Mouth.js";
import {Nose} from "./Nose.js";
import {BadMood} from "./BadMood.js";
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
		const container_3 = scene.add.container(-5, -2724);
		container_3.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(container_3);

		// background
		const background = scene.add.image(0, 1671, "Background_01");
		background.setOrigin(0, 0);
		container_3.add(background);

		// background_01
		const background_01 = scene.add.image(0, 3906, "Background_01");
		background_01.setOrigin(0, 0);
		container_3.add(background_01);

		// background_02
		const background_02 = scene.add.image(0, 3006, "Background_02");
		background_02.setOrigin(0, 0);
		container_3.add(background_02);

		// background_1
		const background_1 = scene.add.image(0, 838, "Background_02");
		background_1.setOrigin(0, 0);
		container_3.add(background_1);

		// background_2
		const background_2 = scene.add.image(0, -685, "Background_01");
		background_2.setOrigin(0, 0);
		container_3.add(background_2);

		// background_3
		const background_3 = scene.add.image(-4, -1826, "Background_02");
		background_3.setOrigin(0, 0);
		background_3.alpha = 0.8;
		background_3.alphaTopLeft = 0.8;
		background_3.alphaTopRight = 0.8;
		background_3.alphaBottomLeft = 0.8;
		background_3.alphaBottomRight = 0.8;
		container_3.add(background_3);

		// background_4
		const background_4 = scene.add.image(0, -3457, "Background_01");
		background_4.setOrigin(0, 0);
		container_3.add(background_4);

		// background_5
		const background_5 = scene.add.image(0, -6052, "Background_01");
		background_5.setOrigin(0, 0);
		container_3.add(background_5);

		// background_6
		const background_6 = scene.add.image(0, -4450, "Background_02");
		background_6.setOrigin(0, 0);
		container_3.add(background_6);

		// background_7
		const background_7 = scene.add.image(0, -7011, "Background_02");
		background_7.setOrigin(0, 0);
		background_7.alpha = 0.75;
		background_7.alphaTopLeft = 0.75;
		background_7.alphaTopRight = 0.75;
		background_7.alphaBottomLeft = 0.75;
		background_7.alphaBottomRight = 0.75;
		container_3.add(background_7);

		// background_8
		const background_8 = scene.add.image(0, -8444, "Background_01");
		background_8.setOrigin(0, 0);
		background_8.alpha = 0.75;
		background_8.alphaTopLeft = 0.75;
		background_8.alphaTopRight = 0.75;
		background_8.alphaBottomLeft = 0.75;
		background_8.alphaBottomRight = 0.75;
		container_3.add(background_8);

		// player
		const player = scene.add.container(528, 1962);
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
		wall_1.scaleX = 1;
		wall_1.scaleY = 1;
		beginningClouds.add(wall_1);

		// wall_2
		const wall_2 = new Wall1(scene, 0, 177);
		wall_2.scaleX = 0.5;
		wall_2.scaleY = 0.5;
		beginningClouds.add(wall_2);

		// wall_8
		const wall_8 = new Wall1(scene, 1096, 13);
		wall_8.scaleX = -1;
		wall_8.scaleY = 1;
		beginningClouds.add(wall_8);

		// wall2
		const wall2 = new Wall2(scene, 1106, 190);
		wall2.scaleX = 0.55;
		wall2.scaleY = 0.55;
		beginningClouds.add(wall2);

		// rainbow1
		const rainbow1 = scene.add.container(-22, -7874);
		rainbow1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		rainbow1.alpha = 0.75;
		this.add(rainbow1);

		// badMood
		const badMood = new BadMood(scene, -2231, 3923);
		badMood.scaleX = 0.75;
		badMood.scaleY = 0.75;
		badMood.alpha = 1;
		rainbow1.add(badMood);

		// wall
		const wall = new Wall1(scene, 548, 7923);
		wall.scaleX = -0.57;
		wall.scaleY = 0.57;
		rainbow1.add(wall);

		// rainbow
		const rainbow = new Rainbow(scene, 0, -2189);
		rainbow1.add(rainbow);

		// mouth_1
		const mouth_1 = new Mouth(scene, 1020, 6505);
		mouth_1.scaleX = 1;
		mouth_1.scaleY = 1;
		rainbow1.add(mouth_1);

		// mouth_2
		const mouth_2 = new Mouth(scene, 1037, 7596);
		rainbow1.add(mouth_2);

		// collectible2
		const collectible2 = new Collectible2(scene, 542, 8634);
		rainbow1.add(collectible2);

		// badThought
		const badThought = new BadThought(scene, 681, 4140);
		rainbow1.add(badThought);

		// mouth_4
		const mouth_4 = new Mouth(scene, 120, 8165);
		mouth_4.scaleX = -1;
		mouth_4.scaleY = 1;
		rainbow1.add(mouth_4);

		// mouth_5
		const mouth_5 = new Mouth(scene, 1032, 8152);
		rainbow1.add(mouth_5);

		// mouth_7
		const mouth_7 = new Mouth(scene, 95, 7600);
		mouth_7.scaleX = -1;
		mouth_7.scaleY = 1;
		rainbow1.add(mouth_7);

		// wall_4
		const wall_4 = new Wall2(scene, 808, 6074);
		wall_4.scaleX = 1;
		wall_4.scaleY = 1;
		wall_4.angle = 0;
		rainbow1.add(wall_4);

		// wall_9
		const wall_9 = new Wall1(scene, 934, 7380);
		wall_9.scaleX = -0.7;
		wall_9.scaleY = 0.7;
		rainbow1.add(wall_9);

		// wall_10
		const wall_10 = new Wall1(scene, 117, 7377);
		wall_10.scaleX = 0.7;
		wall_10.scaleY = 0.7;
		rainbow1.add(wall_10);

		// mouth
		const mouth = new Mouth(scene, 1059, 4605);
		mouth.scaleX = 1;
		mouth.scaleY = 1;
		rainbow1.add(mouth);

		// mouth_3
		const mouth_3 = new Mouth(scene, 1044, 4386);
		mouth_3.scaleX = 1;
		mouth_3.scaleY = 1;
		rainbow1.add(mouth_3);

		// badThought_2
		const badThought_2 = new BadThought(scene, 1035, 4139);
		rainbow1.add(badThought_2);

		// badThought_4
		const badThought_4 = new BadThought(scene, 853, 4129);
		rainbow1.add(badThought_4);

		// collectible_8
		const collectible_8 = new Collectible2(scene, 546, 8868);
		rainbow1.add(collectible_8);

		// collectible
		const collectible = new Collectible2(scene, 542, 8384);
		rainbow1.add(collectible);

		// collectible_9
		const collectible_9 = new Collectible2(scene, 223, 6153);
		rainbow1.add(collectible_9);

		// badMood_1
		const badMood_1 = new BadMood(scene, 42, -4816);
		badMood_1.scaleX = 1;
		badMood_1.scaleY = 1;
		badMood_1.alpha = 0.8;
		rainbow1.add(badMood_1);

		// mouth_8
		const mouth_8 = new Mouth(scene, 1026, 6287);
		mouth_8.scaleX = 1;
		mouth_8.scaleY = 1;
		rainbow1.add(mouth_8);

		// nose_5
		const nose_5 = new Nose(scene, 154, 3607);
		rainbow1.add(nose_5);

		// collectible_16
		const collectible_16 = new Collectible2(scene, 517, 7383);
		rainbow1.add(collectible_16);

		// collectible_17
		const collectible_17 = new Collectible2(scene, 513, 7194);
		rainbow1.add(collectible_17);

		// collectible_3
		const collectible_3 = new Collectible2(scene, 521, 6963);
		rainbow1.add(collectible_3);

		// collectible_4
		const collectible_4 = new Collectible2(scene, 518, 6765);
		rainbow1.add(collectible_4);

		// collectible_7
		const collectible_7 = new Collectible2(scene, 225, 6001);
		rainbow1.add(collectible_7);

		// collectible_18
		const collectible_18 = new Collectible2(scene, 228, 5856);
		rainbow1.add(collectible_18);

		// nose_8
		const nose_8 = new Nose(scene, 365, 3616);
		rainbow1.add(nose_8);

		// badThought_3
		const badThought_3 = new BadThought(scene, 217, 2713);
		rainbow1.add(badThought_3);

		// badThought_8
		const badThought_8 = new BadThought(scene, 472, 2714);
		rainbow1.add(badThought_8);

		// nose_9
		const nose_9 = new Nose(scene, 739, 2185);
		rainbow1.add(nose_9);

		// nose_10
		const nose_10 = new Nose(scene, 977, 2178);
		rainbow1.add(nose_10);

		// collectible_11
		const collectible_11 = new Collectible2(scene, 258.77703857421875, 4213.4794921875);
		rainbow1.add(collectible_11);

		// collectible_12
		const collectible_12 = new Collectible2(scene, 254.7076416015625, 4091.397705078125);
		rainbow1.add(collectible_12);

		// collectible_13
		const collectible_13 = new Collectible2(scene, 254.7076416015625, 3953.038330078125);
		rainbow1.add(collectible_13);

		// badThought_9
		const badThought_9 = new BadThought(scene, 474, 2508);
		rainbow1.add(badThought_9);

		// badThought_10
		const badThought_10 = new BadThought(scene, 470, 2309);
		rainbow1.add(badThought_10);

		// badThought_11
		const badThought_11 = new BadThought(scene, 474, 2085);
		rainbow1.add(badThought_11);

		// badThought_12
		const badThought_12 = new BadThought(scene, 487, 1576);
		rainbow1.add(badThought_12);

		// badThought_13
		const badThought_13 = new BadThought(scene, 503, 1324);
		rainbow1.add(badThought_13);

		// nose_1
		const nose_1 = new Nose(scene, 739, 1564);
		rainbow1.add(nose_1);

		// nose_2
		const nose_2 = new Nose(scene, 975, 1577);
		rainbow1.add(nose_2);

		// badThought_14
		const badThought_14 = new BadThought(scene, 494, 1825);
		rainbow1.add(badThought_14);

		// badThought_15
		const badThought_15 = new BadThought(scene, 499, 1084);
		rainbow1.add(badThought_15);

		// mouth_9
		const mouth_9 = new Mouth(scene, 1024, 319);
		mouth_9.scaleX = 1;
		mouth_9.scaleY = 1;
		rainbow1.add(mouth_9);

		// mouth_11
		const mouth_11 = new Mouth(scene, 1024, 547);
		mouth_11.scaleX = 1;
		mouth_11.scaleY = 1;
		rainbow1.add(mouth_11);

		// badThought_16
		const badThought_16 = new BadThought(scene, 503, 811);
		rainbow1.add(badThought_16);

		// nose_3
		const nose_3 = new Nose(scene, 739, 905);
		rainbow1.add(nose_3);

		// nose_11
		const nose_11 = new Nose(scene, 987, 909);
		rainbow1.add(nose_11);

		// badThought_17
		const badThought_17 = new BadThought(scene, 723, 75);
		rainbow1.add(badThought_17);

		// badThought_18
		const badThought_18 = new BadThought(scene, 971, 63);
		rainbow1.add(badThought_18);

		// wallVertical_1
		const wallVertical_1 = new WallVertical(scene, 486, -3837);
		wallVertical_1.scaleX = 0.5;
		wallVertical_1.scaleY = 0.5;
		this.add(wallVertical_1);

		// container_1
		const container_1 = scene.add.container(393, -2749);
		container_1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(container_1);

		// nose
		const nose = new Nose(scene, -206, 0);
		container_1.add(nose);

		// nose_4
		const nose_4 = new Nose(scene, 53, 0);
		container_1.add(nose_4);

		// nose_6
		const nose_6 = new Nose(scene, 317, 0);
		container_1.add(nose_6);

		// nose_7
		const nose_7 = new Nose(scene, 558, 0);
		container_1.add(nose_7);

		// mouth_6
		const mouth_6 = new Mouth(scene, 115, -4690);
		mouth_6.scaleX = -1;
		mouth_6.scaleY = 1;
		this.add(mouth_6);

		// mouth_10
		const mouth_10 = new Mouth(scene, 112, -4891);
		mouth_10.scaleX = -1;
		mouth_10.scaleY = 1;
		this.add(mouth_10);

		// collectible_1
		const collectible_1 = new Collectible2(scene, 932.6427667880445, 42.624516921965004);
		this.add(collectible_1);

		// collectible_5
		const collectible_5 = new Collectible2(scene, 135.04227755549613, 34.48573641959206);
		this.add(collectible_5);

		// collectible_2
		const collectible_2 = new Collectible2(scene, 822.7692300060102, -5145.848053340785);
		this.add(collectible_2);

		// collectible_6
		const collectible_6 = new Collectible2(scene, 819, -5284);
		this.add(collectible_6);

		// collectible_10
		const collectible_10 = new Collectible2(scene, 819, -5423);
		this.add(collectible_10);

		// wallVertical
		const wallVertical = new WallVertical(scene, 505, -7901);
		wallVertical.scaleX = 0.5;
		wallVertical.scaleY = 0.5;
		this.add(wallVertical);

		// badMood (prefab fields)
		badMood.player = "p1";
		badMood.dragInside = 50;

		// rainbow (prefab fields)
		rainbow.text = "100m";

		// mouth_1 (prefab fields)
		mouth_1.property = "p3";

		// mouth_2 (prefab fields)
		mouth_2.property = "p2";

		// mouth_4 (prefab fields)
		mouth_4.property = "p1";

		// mouth_5 (prefab fields)
		mouth_5.property = "p3";

		// mouth_7 (prefab fields)
		mouth_7.property = "p4";

		// mouth (prefab fields)
		mouth.property = "p2";

		// mouth_3 (prefab fields)
		mouth_3.property = "p3";

		// badMood_1 (prefab fields)
		badMood_1.player = "p1";
		badMood_1.dragInside = 0.5;

		// mouth_8 (prefab fields)
		mouth_8.property = "p1";

		// nose_5 (prefab fields)
		nose_5.property = "p1";

		// nose_8 (prefab fields)
		nose_8.property = "p4";

		// nose_9 (prefab fields)
		nose_9.property = "p2";

		// nose_10 (prefab fields)
		nose_10.property = "p4";

		// nose_1 (prefab fields)
		nose_1.property = "p1";

		// nose_2 (prefab fields)
		nose_2.property = "p3";

		// mouth_9 (prefab fields)
		mouth_9.property = "p1";

		// mouth_11 (prefab fields)
		mouth_11.property = "p3";

		// nose_3 (prefab fields)
		nose_3.property = "p2";

		// nose_11 (prefab fields)
		nose_11.property = "p4";

		// nose (prefab fields)
		nose.property = "p1";

		// nose_4 (prefab fields)
		nose_4.property = "p2";

		// nose_6 (prefab fields)
		nose_6.property = "p3";

		// nose_7 (prefab fields)
		nose_7.property = "p4";

		// mouth_6 (prefab fields)
		mouth_6.property = "p1";

		// mouth_10 (prefab fields)
		mouth_10.property = "p3";

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