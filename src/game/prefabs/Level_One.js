
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

		// nose_6
		const nose_6 = new Nose(scene, 966, -1462);
		container_3.add(nose_6);

		// player
		const player = scene.add.container(528, 2000);
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
		wall_1.scaleX = 0.75;
		wall_1.scaleY = 0.75;
		beginningClouds.add(wall_1);

		// wall_2
		const wall_2 = new Wall1(scene, 0, 177);
		wall_2.scaleX = 0.5;
		wall_2.scaleY = 0.5;
		beginningClouds.add(wall_2);

		// wall_8
		const wall_8 = new Wall1(scene, 1096, 13);
		wall_8.scaleX = -0.75;
		wall_8.scaleY = 0.75;
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
		badMood.alpha = 0.8;
		rainbow1.add(badMood);

		// wall
		const wall = new Wall1(scene, 552, 7356);
		wall.scaleX = -0.57;
		wall.scaleY = 0.57;
		rainbow1.add(wall);

		// rainbow
		const rainbow = new Rainbow(scene, 0, -2189);
		rainbow1.add(rainbow);

		// mouth_1
		const mouth_1 = new Mouth(scene, 1054, 6547);
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
		const badThought = new BadThought(scene, 1851, 4152);
		rainbow1.add(badThought);

		// mouth_4
		const mouth_4 = new Mouth(scene, 120, 8136);
		mouth_4.scaleX = -1;
		mouth_4.scaleY = 1;
		rainbow1.add(mouth_4);

		// mouth_5
		const mouth_5 = new Mouth(scene, 1037, 8152);
		rainbow1.add(mouth_5);

		// mouth_7
		const mouth_7 = new Mouth(scene, 95, 7600);
		mouth_7.scaleX = -1;
		mouth_7.scaleY = 1;
		rainbow1.add(mouth_7);

		// wall_3
		const wall_3 = new Wall2(scene, 97, 6302);
		wall_3.scaleX = -0.5;
		wall_3.scaleY = 0.5;
		wall_3.angle = 0;
		rainbow1.add(wall_3);

		// wall_4
		const wall_4 = new Wall2(scene, 999, 6310);
		wall_4.scaleX = 0.5;
		wall_4.scaleY = 0.5;
		wall_4.angle = 0;
		rainbow1.add(wall_4);

		// wall_9
		const wall_9 = new Wall1(scene, 1144, 7901);
		wall_9.scaleX = -0.7;
		wall_9.scaleY = 0.7;
		rainbow1.add(wall_9);

		// wall_10
		const wall_10 = new Wall1(scene, 29, 7928);
		wall_10.scaleX = 0.7;
		wall_10.scaleY = 0.7;
		rainbow1.add(wall_10);

		// collectible_4
		const collectible_4 = new Collectible2(scene, 901, 7171);
		rainbow1.add(collectible_4);

		// collectible_7
		const collectible_7 = new Collectible2(scene, 176, 6904);
		rainbow1.add(collectible_7);

		// mouth
		const mouth = new Mouth(scene, 2558, 4341);
		mouth.scaleX = 1;
		mouth.scaleY = 1;
		rainbow1.add(mouth);

		// mouth_3
		const mouth_3 = new Mouth(scene, 2167, 3969);
		mouth_3.scaleX = 1;
		mouth_3.scaleY = 1;
		rainbow1.add(mouth_3);

		// wall_11
		const wall_11 = new Wall1(scene, 567, 4181);
		wall_11.scaleX = -0.8;
		wall_11.scaleY = 0.8;
		wall_11.angle = 90;
		rainbow1.add(wall_11);

		// badThought_1
		const badThought_1 = new BadThought(scene, 259, 4130);
		rainbow1.add(badThought_1);

		// badThought_2
		const badThought_2 = new BadThought(scene, 3239, 4339);
		rainbow1.add(badThought_2);

		// badThought_3
		const badThought_3 = new BadThought(scene, 1719, 4015);
		rainbow1.add(badThought_3);

		// badThought_4
		const badThought_4 = new BadThought(scene, 1666, 4137);
		rainbow1.add(badThought_4);

		// badThought_5
		const badThought_5 = new BadThought(scene, 1672, 4131);
		rainbow1.add(badThought_5);

		// badThought_6
		const badThought_6 = new BadThought(scene, 374, 4310);
		rainbow1.add(badThought_6);

		// nose_1
		const nose_1 = new Nose(scene, 174, 5216);
		rainbow1.add(nose_1);

		// nose_2
		const nose_2 = new Nose(scene, 433, 5233);
		rainbow1.add(nose_2);

		// nose_3
		const nose_3 = new Nose(scene, 695, 5226);
		rainbow1.add(nose_3);

		// collectible_8
		const collectible_8 = new Collectible2(scene, 546, 8868);
		rainbow1.add(collectible_8);

		// collectible
		const collectible = new Collectible2(scene, 542, 8384);
		rainbow1.add(collectible);

		// collectible_1
		const collectible_1 = new Collectible2(scene, 541, 8128);
		rainbow1.add(collectible_1);

		// collectible_2
		const collectible_2 = new Collectible2(scene, 550, 7814);
		rainbow1.add(collectible_2);

		// collectible_3
		const collectible_3 = new Collectible2(scene, 181, 7212);
		rainbow1.add(collectible_3);

		// collectible_6
		const collectible_6 = new Collectible2(scene, 891, 6903);
		rainbow1.add(collectible_6);

		// collectible_5
		const collectible_5 = new Collectible2(scene, 356, 5981);
		rainbow1.add(collectible_5);

		// collectible_9
		const collectible_9 = new Collectible2(scene, 553, 6091);
		rainbow1.add(collectible_9);

		// collectible_10
		const collectible_10 = new Collectible2(scene, 749, 5972);
		rainbow1.add(collectible_10);

		// collectible_11
		const collectible_11 = new Collectible2(scene, 186, 5841);
		rainbow1.add(collectible_11);

		// collectible_12
		const collectible_12 = new Collectible2(scene, 942, 5859);
		rainbow1.add(collectible_12);

		// badMood_1
		const badMood_1 = new BadMood(scene, 42, -4816);
		badMood_1.scaleX = 1;
		badMood_1.scaleY = 1;
		badMood_1.alpha = 0.8;
		rainbow1.add(badMood_1);

		// nose
		const nose = new Nose(scene, 932, 5236);
		rainbow1.add(nose);

		// mouth_8
		const mouth_8 = new Mouth(scene, 1040, 6077);
		mouth_8.scaleX = 1;
		mouth_8.scaleY = 1;
		rainbow1.add(mouth_8);

		// mouth_6
		const mouth_6 = new Mouth(scene, 120, 6534);
		mouth_6.scaleX = -1;
		mouth_6.scaleY = 1;
		rainbow1.add(mouth_6);

		// mouth_9
		const mouth_9 = new Mouth(scene, 126, 6089);
		mouth_9.scaleX = -1;
		mouth_9.scaleY = 1;
		rainbow1.add(mouth_9);

		// nose_5
		const nose_5 = new Nose(scene, 773, 3695);
		rainbow1.add(nose_5);

		// mouth_10
		const mouth_10 = new Mouth(scene, 104, 4591);
		mouth_10.scaleX = -1;
		mouth_10.scaleY = 1;
		rainbow1.add(mouth_10);

		// mouth_11
		const mouth_11 = new Mouth(scene, 104, 4845);
		mouth_11.scaleX = -1;
		mouth_11.scaleY = 1;
		rainbow1.add(mouth_11);

		// badThought_7
		const badThought_7 = new BadThought(scene, 146, 4303);
		rainbow1.add(badThought_7);

		// collectible_13
		const collectible_13 = new Collectible2(scene, 878.4194946289062, 4460.850341796875);
		rainbow1.add(collectible_13);

		// collectible_14
		const collectible_14 = new Collectible2(scene, 878, 4269);
		rainbow1.add(collectible_14);

		// collectible_15
		const collectible_15 = new Collectible2(scene, 885.2694702148438, 4077.25);
		rainbow1.add(collectible_15);

		// nose_6 (prefab fields)
		nose_6.property = "p4";

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
		mouth_5.property = "p4";

		// mouth_7 (prefab fields)
		mouth_7.property = "p3";

		// mouth (prefab fields)
		mouth.property = "p3";

		// mouth_3 (prefab fields)
		mouth_3.property = "p3";

		// nose_1 (prefab fields)
		nose_1.property = "p4";

		// nose_2 (prefab fields)
		nose_2.property = "p3";

		// nose_3 (prefab fields)
		nose_3.property = "p2";

		// badMood_1 (prefab fields)
		badMood_1.player = "p1";
		badMood_1.dragInside = 0.5;

		// nose (prefab fields)
		nose.property = "p1";

		// mouth_8 (prefab fields)
		mouth_8.property = "p2";

		// mouth_6 (prefab fields)
		mouth_6.property = "p1";

		// mouth_9 (prefab fields)
		mouth_9.property = "p1";

		// nose_5 (prefab fields)
		nose_5.property = "p2";

		// mouth_10 (prefab fields)
		mouth_10.property = "p1";

		// mouth_11 (prefab fields)
		mouth_11.property = "p3";

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