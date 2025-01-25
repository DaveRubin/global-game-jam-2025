
// You can write more code here
import {Wall2} from "./Wall2.js";
import {Wall1} from "./Wall1.js";
import {Mouth} from "./Mouth.js";
import {Nose} from "./Nose.js";
import {BadMood} from "./BadMood.js";
import {Collectible2} from "./Collectible2.js";
import {WallVertical} from "./WallVertical.js";
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

		// background_14
		const background_14 = scene.add.image(0, -10369, "Background_01");
		background_14.setOrigin(0, 0);
		container_3.add(background_14);

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
		container_3.add(background_7);

		// background_13
		const background_13 = scene.add.image(0, -9208, "Background_02");
		background_13.setOrigin(0, 0);
		container_3.add(background_13);

		// background_8
		const background_8 = scene.add.image(0, -8444, "Background_01");
		background_8.setOrigin(0, 0);
		container_3.add(background_8);

		// player
		const player = scene.add.container(528, 2385);
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
		const beginningClouds = scene.add.container(-22, 1816);
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

		// wall_3
		const wall_3 = new Wall1(scene, 250, -10335);
		wall_3.scaleX = 1;
		wall_3.scaleY = 1;
		beginningClouds.add(wall_3);

		// rainbow1
		const rainbow1 = scene.add.container(-22, -7874);
		rainbow1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(rainbow1);

		// badMood
		const badMood = new BadMood(scene, -2231, 3923);
		badMood.scaleX = 0.75;
		badMood.scaleY = 0.75;
		badMood.alpha = 1;
		rainbow1.add(badMood);

		// wall
		const wall = new Wall1(scene, 548, 8546);
		wall.scaleX = -0.57;
		wall.scaleY = 0.57;
		rainbow1.add(wall);

		// mouth_1
		const mouth_1 = new Mouth(scene, 1006, 6447);
		mouth_1.scaleX = 1;
		mouth_1.scaleY = 1;
		rainbow1.add(mouth_1);

		// mouth_2
		const mouth_2 = new Mouth(scene, 1023, 8002);
		rainbow1.add(mouth_2);

		// collectible2
		const collectible2 = new Collectible2(scene, 542, 9257);
		rainbow1.add(collectible2);

		// mouth_4
		const mouth_4 = new Mouth(scene, 120, 8788);
		mouth_4.scaleX = -1;
		mouth_4.scaleY = 1;
		rainbow1.add(mouth_4);

		// mouth_5
		const mouth_5 = new Mouth(scene, 1032, 8775);
		rainbow1.add(mouth_5);

		// mouth_7
		const mouth_7 = new Mouth(scene, 116, 8027);
		mouth_7.scaleX = -1;
		mouth_7.scaleY = 1;
		rainbow1.add(mouth_7);

		// wall_9
		const wall_9 = new Wall1(scene, 941, 7823);
		wall_9.scaleX = -0.7;
		wall_9.scaleY = 0.7;
		rainbow1.add(wall_9);

		// wall_10
		const wall_10 = new Wall1(scene, 117, 7797);
		wall_10.scaleX = 0.7;
		wall_10.scaleY = 0.7;
		rainbow1.add(wall_10);

		// collectible_8
		const collectible_8 = new Collectible2(scene, 546, 9491);
		rainbow1.add(collectible_8);

		// collectible
		const collectible = new Collectible2(scene, 542, 9007);
		rainbow1.add(collectible);

		// collectible_9
		const collectible_9 = new Collectible2(scene, 257, 6189);
		rainbow1.add(collectible_9);

		// mouth_8
		const mouth_8 = new Mouth(scene, 1012, 6143);
		mouth_8.scaleX = 1;
		mouth_8.scaleY = 1;
		rainbow1.add(mouth_8);

		// nose_5
		const nose_5 = new Nose(scene, 139, 3807);
		rainbow1.add(nose_5);

		// collectible_16
		const collectible_16 = new Collectible2(scene, 517, 8006);
		rainbow1.add(collectible_16);

		// collectible_17
		const collectible_17 = new Collectible2(scene, 513, 7817);
		rainbow1.add(collectible_17);

		// collectible_3
		const collectible_3 = new Collectible2(scene, 257, 6523);
		rainbow1.add(collectible_3);

		// collectible_4
		const collectible_4 = new Collectible2(scene, 257, 6361);
		rainbow1.add(collectible_4);

		// collectible_7
		const collectible_7 = new Collectible2(scene, 257, 6037);
		rainbow1.add(collectible_7);

		// nose_8
		const nose_8 = new Nose(scene, 350, 3806);
		rainbow1.add(nose_8);

		// nose_9
		const nose_9 = new Nose(scene, 682, 1949);
		rainbow1.add(nose_9);

		// nose_2
		const nose_2 = new Nose(scene, 934, 1948);
		rainbow1.add(nose_2);

		// badThought_14
		const badThought_14 = new BadThought(scene, 852, 3851);
		rainbow1.add(badThought_14);

		// badThought_17
		const badThought_17 = new BadThought(scene, 714, -1232);
		rainbow1.add(badThought_17);

		// collectible_14
		const collectible_14 = new Collectible2(scene, 509, 7623);
		rainbow1.add(collectible_14);

		// collectible_19
		const collectible_19 = new Collectible2(scene, 252, 6833);
		rainbow1.add(collectible_19);

		// badThought_19
		const badThought_19 = new BadThought(scene, 967, -1230);
		rainbow1.add(badThought_19);

		// mouth_9
		const mouth_9 = new Mouth(scene, 998, -979);
		mouth_9.scaleX = 1;
		mouth_9.scaleY = 1;
		rainbow1.add(mouth_9);

		// badMood_1
		const badMood_1 = new BadMood(scene, -2651, -6320);
		badMood_1.scaleX = 1;
		badMood_1.scaleY = 1;
		badMood_1.alpha = 1;
		rainbow1.add(badMood_1);

		// nose_26
		const nose_26 = new Nose(scene, 465, -1243);
		rainbow1.add(nose_26);

		// badThought_3
		const badThought_3 = new BadThought(scene, 393, 1988);
		rainbow1.add(badThought_3);

		// badThought
		const badThought = new BadThought(scene, 157, 1994);
		rainbow1.add(badThought);

		// wallVertical
		const wallVertical = new WallVertical(scene, 591, 3579);
		rainbow1.add(wallVertical);

		// mouth_3
		const mouth_3 = new Mouth(scene, 1030, 4132);
		mouth_3.scaleX = 1;
		mouth_3.scaleY = 1;
		rainbow1.add(mouth_3);

		// nose_22
		const nose_22 = new Nose(scene, 457, 836);
		rainbow1.add(nose_22);

		// nose_23
		const nose_23 = new Nose(scene, 132, 2956);
		rainbow1.add(nose_23);

		// nose_24
		const nose_24 = new Nose(scene, 343, 2963);
		rainbow1.add(nose_24);

		// badThought_8
		const badThought_8 = new BadThought(scene, 863, 3252);
		rainbow1.add(badThought_8);

		// mouth_10
		const mouth_10 = new Mouth(scene, 1001, 1265);
		mouth_10.scaleX = 1;
		mouth_10.scaleY = 1;
		rainbow1.add(mouth_10);

		// badThought_2
		const badThought_2 = new BadThought(scene, 959, 956);
		rainbow1.add(badThought_2);

		// badThought_12
		const badThought_12 = new BadThought(scene, 188, 953);
		rainbow1.add(badThought_12);

		// badThought_13
		const badThought_13 = new BadThought(scene, 179, -997);
		rainbow1.add(badThought_13);

		// collectible_15
		const collectible_15 = new Collectible2(scene, 249, 6678);
		rainbow1.add(collectible_15);

		// mouth_19
		const mouth_19 = new Mouth(scene, 1012, 6738);
		mouth_19.scaleX = 1;
		mouth_19.scaleY = 1;
		rainbow1.add(mouth_19);

		// mouth_20
		const mouth_20 = new Mouth(scene, 1005, 7038);
		mouth_20.scaleX = 1;
		mouth_20.scaleY = 1;
		rainbow1.add(mouth_20);

		// collectible_23
		const collectible_23 = new Collectible2(scene, 249, 6971);
		rainbow1.add(collectible_23);

		// nose_10
		const nose_10 = new Nose(scene, 676, 839);
		rainbow1.add(nose_10);

		// mouth_27
		const mouth_27 = new Mouth(scene, 1011, -2864);
		mouth_27.scaleX = 1;
		mouth_27.scaleY = 1;
		rainbow1.add(mouth_27);

		// mouth_28
		const mouth_28 = new Mouth(scene, 1005, -2662);
		mouth_28.scaleX = 1;
		mouth_28.scaleY = 1;
		rainbow1.add(mouth_28);

		// mouth_29
		const mouth_29 = new Mouth(scene, 1000, -2449);
		mouth_29.scaleX = 1;
		mouth_29.scaleY = 1;
		rainbow1.add(mouth_29);

		// mouth_30
		const mouth_30 = new Mouth(scene, 1006, -2214);
		mouth_30.scaleX = 1;
		mouth_30.scaleY = 1;
		rainbow1.add(mouth_30);

		// mouth_31
		const mouth_31 = new Mouth(scene, 1005, -1984);
		mouth_31.scaleX = 1;
		mouth_31.scaleY = 1;
		rainbow1.add(mouth_31);

		// mouth_32
		const mouth_32 = new Mouth(scene, 994, -1755);
		mouth_32.scaleX = 1;
		mouth_32.scaleY = 1;
		rainbow1.add(mouth_32);

		// badThought_1
		const badThought_1 = new BadThought(scene, 186, 680);
		rainbow1.add(badThought_1);

		// badThought_5
		const badThought_5 = new BadThought(scene, 962, 695);
		rainbow1.add(badThought_5);

		// nose_11
		const nose_11 = new Nose(scene, 895, -580);
		rainbow1.add(nose_11);

		// badThought_6
		const badThought_6 = new BadThought(scene, 420, -426);
		rainbow1.add(badThought_6);

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
		const mouth_6 = new Mouth(scene, 118, -5594);
		mouth_6.scaleX = -1;
		mouth_6.scaleY = 1;
		this.add(mouth_6);

		// collectible_1
		const collectible_1 = new Collectible2(scene, 933, 665);
		this.add(collectible_1);

		// collectible_5
		const collectible_5 = new Collectible2(scene, 135, 657);
		this.add(collectible_5);

		// collectible_2
		const collectible_2 = new Collectible2(scene, 256, -4300);
		this.add(collectible_2);

		// collectible_6
		const collectible_6 = new Collectible2(scene, 258, -4459);
		this.add(collectible_6);

		// collectible_10
		const collectible_10 = new Collectible2(scene, 258, -4614);
		this.add(collectible_10);

		// mouth
		const mouth = new Mouth(scene, 90, -6595);
		mouth.scaleX = -1;
		mouth.scaleY = 1;
		this.add(mouth);

		// collectible_13
		const collectible_13 = new Collectible2(scene, 876, -8107);
		this.add(collectible_13);

		// collectible_11
		const collectible_11 = new Collectible2(scene, 872, -7977);
		this.add(collectible_11);

		// collectible_12
		const collectible_12 = new Collectible2(scene, 868, -7862);
		this.add(collectible_12);

		// LevelTwo
		const levelTwo = scene.add.container(-22, -18200);
		levelTwo.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(levelTwo);

		// background_10
		const background_10 = scene.add.image(0, 2883, "Background_01");
		background_10.setOrigin(0, 0);
		background_10.alpha = 0.75;
		background_10.alphaTopLeft = 0.75;
		background_10.alphaTopRight = 0.75;
		background_10.alphaBottomLeft = 0.75;
		background_10.alphaBottomRight = 0.75;
		background_10.tintTopLeft = 6418304;
		background_10.tintTopRight = 6418304;
		background_10.tintBottomLeft = 6418304;
		background_10.tintBottomRight = 6418304;
		levelTwo.add(background_10);

		// background_9
		const background_9 = scene.add.image(0, 4539, "Background_02");
		background_9.setOrigin(0, 0);
		background_9.tintTopLeft = 6418304;
		background_9.tintTopRight = 6418304;
		background_9.tintBottomLeft = 6418304;
		background_9.tintBottomRight = 6418304;
		levelTwo.add(background_9);

		// background_11
		const background_11 = scene.add.image(0, 1945, "Background_02");
		background_11.setOrigin(0, 0);
		background_11.tintTopLeft = 6418304;
		background_11.tintTopRight = 6418304;
		background_11.tintBottomLeft = 6418304;
		background_11.tintBottomRight = 6418304;
		levelTwo.add(background_11);

		// background_12
		const background_12 = scene.add.image(0, 402, "Background_01");
		background_12.setOrigin(0, 0);
		background_12.tintTopLeft = 6418304;
		background_12.tintTopRight = 6418304;
		background_12.tintBottomLeft = 6418304;
		background_12.tintBottomRight = 6418304;
		levelTwo.add(background_12);

		// nose_12
		const nose_12 = new Nose(scene, 206, 4360);
		levelTwo.add(nose_12);

		// nose_18
		const nose_18 = new Nose(scene, 204, 2906);
		levelTwo.add(nose_18);

		// nose_32
		const nose_32 = new Nose(scene, 208, 1360);
		levelTwo.add(nose_32);

		// nose_13
		const nose_13 = new Nose(scene, 465, 4360);
		levelTwo.add(nose_13);

		// nose_19
		const nose_19 = new Nose(scene, 463, 2906);
		levelTwo.add(nose_19);

		// nose_33
		const nose_33 = new Nose(scene, 467, 1360);
		levelTwo.add(nose_33);

		// rainbow
		const rainbow = new Rainbow(scene, 0, 5358);
		levelTwo.add(rainbow);

		// nose_14
		const nose_14 = new Nose(scene, 729, 4360);
		levelTwo.add(nose_14);

		// nose_20
		const nose_20 = new Nose(scene, 727, 2906);
		levelTwo.add(nose_20);

		// nose_34
		const nose_34 = new Nose(scene, 731, 1360);
		levelTwo.add(nose_34);

		// nose_15
		const nose_15 = new Nose(scene, 970, 4360);
		levelTwo.add(nose_15);

		// nose_21
		const nose_21 = new Nose(scene, 968, 2906);
		levelTwo.add(nose_21);

		// nose_35
		const nose_35 = new Nose(scene, 972, 1360);
		levelTwo.add(nose_35);

		// container_2
		const container_2 = scene.add.container(121, -11543);
		container_2.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(container_2);

		// badThought_7
		const badThought_7 = new BadThought(scene, 45, 491);
		container_2.add(badThought_7);

		// nose_17
		const nose_17 = new Nose(scene, 294, 476);
		container_2.add(nose_17);

		// badThought_10
		const badThought_10 = new BadThought(scene, 802, 502);
		container_2.add(badThought_10);

		// mouth_13
		const mouth_13 = new Mouth(scene, 5, 785);
		mouth_13.scaleX = -1;
		mouth_13.scaleY = 1;
		container_2.add(mouth_13);

		// mouth_14
		const mouth_14 = new Mouth(scene, 5, 1010);
		mouth_14.scaleX = -1;
		mouth_14.scaleY = 1;
		container_2.add(mouth_14);

		// mouth_15
		const mouth_15 = new Mouth(scene, 5, 1238);
		mouth_15.scaleX = -1;
		mouth_15.scaleY = 1;
		container_2.add(mouth_15);

		// collectible_26
		const collectible_26 = new Collectible2(scene, 432, 825);
		container_2.add(collectible_26);

		// nose_3
		const nose_3 = new Nose(scene, 512, 485);
		container_2.add(nose_3);

		// badThought_16
		const badThought_16 = new BadThought(scene, 783, 123);
		container_2.add(badThought_16);

		// badThought_4
		const badThought_4 = new BadThought(scene, 42, 126);
		container_2.add(badThought_4);

		// nose_1
		const nose_1 = new Nose(scene, 518, 143);
		container_2.add(nose_1);

		// nose_16
		const nose_16 = new Nose(scene, 292, 153);
		container_2.add(nose_16);

		// mouth_22
		const mouth_22 = new Mouth(scene, 5, 1468);
		mouth_22.scaleX = -1;
		mouth_22.scaleY = 1;
		container_2.add(mouth_22);

		// collectible_21
		const collectible_21 = new Collectible2(scene, 414, 1486);
		container_2.add(collectible_21);

		// collectible_28
		const collectible_28 = new Collectible2(scene, 408, 1654);
		container_2.add(collectible_28);

		// mouth_24
		const mouth_24 = new Mouth(scene, 5, 1699);
		mouth_24.scaleX = -1;
		mouth_24.scaleY = 1;
		container_2.add(mouth_24);

		// mouth_25
		const mouth_25 = new Mouth(scene, 18, 1934);
		mouth_25.scaleX = -1;
		mouth_25.scaleY = 1;
		container_2.add(mouth_25);

		// collectible_29
		const collectible_29 = new Collectible2(scene, 422, 1840);
		container_2.add(collectible_29);

		// collectible_24
		const collectible_24 = new Collectible2(scene, 553, -10550);
		this.add(collectible_24);

		// collectible_25
		const collectible_25 = new Collectible2(scene, 542, -10387);
		this.add(collectible_25);

		// collectible_27
		const collectible_27 = new Collectible2(scene, 537, -10224);
		this.add(collectible_27);

		// mouth_18
		const mouth_18 = new Mouth(scene, 101, -7713);
		mouth_18.scaleX = -1;
		mouth_18.scaleY = 1;
		this.add(mouth_18);

		// mouth_21
		const mouth_21 = new Mouth(scene, 100, -7982);
		mouth_21.scaleX = -1;
		mouth_21.scaleY = 1;
		this.add(mouth_21);

		// collectible_18
		const collectible_18 = new Collectible2(scene, 866, -7734);
		this.add(collectible_18);

		// collectible_20
		const collectible_20 = new Collectible2(scene, 859, -7603);
		this.add(collectible_20);

		// collectible_22
		const collectible_22 = new Collectible2(scene, 546, -9540);
		this.add(collectible_22);

		// collectible_30
		const collectible_30 = new Collectible2(scene, 929, -14755);
		this.add(collectible_30);

		// collectible_31
		const collectible_31 = new Collectible2(scene, 925.0252855383347, -14634.887462070204);
		this.add(collectible_31);

		// collectible_32
		const collectible_32 = new Collectible2(scene, 934.619087988577, -14519.761832667298);
		this.add(collectible_32);

		// collectible_33
		const collectible_33 = new Collectible2(scene, 925.0252855383347, -14404.63620326439);
		this.add(collectible_33);

		// collectible_34
		const collectible_34 = new Collectible2(scene, 925.0252855383347, -14275.11987018612);
		this.add(collectible_34);

		// collectible_35
		const collectible_35 = new Collectible2(scene, 920.2283843132136, -14140.806635882727);
		this.add(collectible_35);

		// badMood (prefab fields)
		badMood.player = "p1";
		badMood.dragInside = 50;

		// mouth_1 (prefab fields)
		mouth_1.property = "p2";

		// mouth_2 (prefab fields)
		mouth_2.property = "p2";

		// mouth_4 (prefab fields)
		mouth_4.property = "p1";

		// mouth_5 (prefab fields)
		mouth_5.property = "p3";

		// mouth_7 (prefab fields)
		mouth_7.property = "p4";

		// mouth_8 (prefab fields)
		mouth_8.property = "p1";

		// nose_5 (prefab fields)
		nose_5.property = "p1";

		// nose_8 (prefab fields)
		nose_8.property = "p1";

		// nose_9 (prefab fields)
		nose_9.property = "p1";

		// nose_2 (prefab fields)
		nose_2.property = "p1";

		// mouth_9 (prefab fields)
		mouth_9.property = "p1";

		// badMood_1 (prefab fields)
		badMood_1.player = "p1";
		badMood_1.dragInside = 500;

		// nose_26 (prefab fields)
		nose_26.property = "p2";

		// mouth_3 (prefab fields)
		mouth_3.property = "p3";

		// nose_22 (prefab fields)
		nose_22.property = "p4";

		// nose_23 (prefab fields)
		nose_23.property = "p4";

		// nose_24 (prefab fields)
		nose_24.property = "p4";

		// mouth_10 (prefab fields)
		mouth_10.property = "p3";

		// mouth_19 (prefab fields)
		mouth_19.property = "p3";

		// mouth_20 (prefab fields)
		mouth_20.property = "p4";

		// nose_10 (prefab fields)
		nose_10.property = "p4";

		// mouth_27 (prefab fields)
		mouth_27.property = "p1";

		// mouth_28 (prefab fields)
		mouth_28.property = "p1";

		// mouth_29 (prefab fields)
		mouth_29.property = "p2";

		// mouth_30 (prefab fields)
		mouth_30.property = "p2";

		// mouth_31 (prefab fields)
		mouth_31.property = "p1";

		// mouth_32 (prefab fields)
		mouth_32.property = "p1";

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
		mouth_6.property = "p2";

		// mouth (prefab fields)
		mouth.property = "p1";

		// nose_12 (prefab fields)
		nose_12.property = "p1";

		// nose_18 (prefab fields)
		nose_18.property = "p2";

		// nose_32 (prefab fields)
		nose_32.property = "p3";

		// nose_13 (prefab fields)
		nose_13.property = "p1";

		// nose_19 (prefab fields)
		nose_19.property = "p2";

		// nose_33 (prefab fields)
		nose_33.property = "p3";

		// rainbow (prefab fields)
		rainbow.text = "100m";

		// nose_14 (prefab fields)
		nose_14.property = "p1";

		// nose_20 (prefab fields)
		nose_20.property = "p2";

		// nose_34 (prefab fields)
		nose_34.property = "p3";

		// nose_15 (prefab fields)
		nose_15.property = "p1";

		// nose_21 (prefab fields)
		nose_21.property = "p2";

		// nose_35 (prefab fields)
		nose_35.property = "p3";

		// nose_17 (prefab fields)
		nose_17.property = "p4";

		// mouth_13 (prefab fields)
		mouth_13.property = "p3";

		// mouth_14 (prefab fields)
		mouth_14.property = "p3";

		// mouth_15 (prefab fields)
		mouth_15.property = "p4";

		// nose_3 (prefab fields)
		nose_3.property = "p4";

		// nose_1 (prefab fields)
		nose_1.property = "p2";

		// nose_16 (prefab fields)
		nose_16.property = "p2";

		// mouth_22 (prefab fields)
		mouth_22.property = "p4";

		// mouth_24 (prefab fields)
		mouth_24.property = "p3";

		// mouth_25 (prefab fields)
		mouth_25.property = "p3";

		// mouth_18 (prefab fields)
		mouth_18.property = "p3";

		// mouth_21 (prefab fields)
		mouth_21.property = "p3";

		// collectible_30 (prefab fields)
		collectible_30.offsetX = -840;

		// collectible_31 (prefab fields)
		collectible_31.offsetX = 0;
		collectible_31.moveDelay = 150;

		// collectible_32 (prefab fields)
		collectible_32.offsetX = 0;
		collectible_32.moveDelay = 300;

		// collectible_33 (prefab fields)
		collectible_33.offsetX = 0;
		collectible_33.moveDelay = 450;

		// collectible_34 (prefab fields)
		collectible_34.offsetX = 0;
		collectible_34.moveDelay = 700;

		// collectible_35 (prefab fields)
		collectible_35.offsetX = 0;
		collectible_35.moveDelay = 850;

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