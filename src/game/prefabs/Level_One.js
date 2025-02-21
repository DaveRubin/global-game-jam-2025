
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

		// BG1
		const bG1 = scene.add.container(0, -609);
		bG1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG1);

		// rectangle
		const rectangle = scene.add.rectangle(0, 929, 128, 128);
		rectangle.scaleX = 9.25;
		rectangle.scaleY = 38.8;
		rectangle.setOrigin(0, 0.5);
		rectangle.isFilled = true;
		rectangle.fillColor = 16245930;
		rectangle.strokeAlpha = 0;
		bG1.add(rectangle);

		// background_2
		const background_2 = scene.add.image(0, -947, "Background_02");
		background_2.setOrigin(0, 0);
		background_2.tintTopLeft = 16769184;
		background_2.tintTopRight = 16769184;
		background_2.tintBottomLeft = 16769184;
		background_2.tintBottomRight = 16769184;
		bG1.add(background_2);

		// background_3
		const background_3 = scene.add.image(0, -41, "Background_01");
		background_3.setOrigin(0, 0);
		background_3.tintTopLeft = 16701851;
		background_3.tintTopRight = 16701851;
		background_3.tintBottomLeft = 16701851;
		background_3.tintBottomRight = 16701851;
		bG1.add(background_3);

		// background_4
		const background_4 = scene.add.image(0, 410, "Background_02");
		background_4.setOrigin(0, 0);
		background_4.tintTopLeft = 16764289;
		background_4.tintTopRight = 16764289;
		background_4.tintBottomLeft = 16764289;
		background_4.tintBottomRight = 16764289;
		bG1.add(background_4);

		// background_5
		const background_5 = scene.add.image(0, 1165, "Background_01");
		background_5.setOrigin(0, 0);
		background_5.tintTopLeft = 16039554;
		background_5.tintTopRight = 16039554;
		background_5.tintBottomLeft = 16039554;
		background_5.tintBottomRight = 16039554;
		bG1.add(background_5);

		// background_24
		const background_24 = scene.add.image(0, -986, "Background_02");
		background_24.setOrigin(0, 0);
		background_24.tintTopLeft = 16764289;
		background_24.tintTopRight = 16764289;
		background_24.tintBottomLeft = 16764289;
		background_24.tintBottomRight = 16764289;
		bG1.add(background_24);

		// BG
		const bG = scene.add.container(0, -5465);
		bG.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG);

		// background
		const background = scene.add.image(0, -947, "Background_02");
		background.setOrigin(0, 0);
		background.tintTopLeft = 16769184;
		background.tintTopRight = 16769184;
		background.tintBottomLeft = 16769184;
		background.tintBottomRight = 16769184;
		bG.add(background);

		// background_1
		const background_1 = scene.add.image(0, -467, "Background_01");
		background_1.setOrigin(0, 0);
		background_1.tintTopLeft = 16701851;
		background_1.tintTopRight = 16701851;
		background_1.tintBottomLeft = 16701851;
		background_1.tintBottomRight = 16701851;
		bG.add(background_1);

		// background_6
		const background_6 = scene.add.image(0, 410, "Background_02");
		background_6.setOrigin(0, 0);
		background_6.tintTopLeft = 16764289;
		background_6.tintTopRight = 16764289;
		background_6.tintBottomLeft = 16764289;
		background_6.tintBottomRight = 16764289;
		bG.add(background_6);

		// background_7
		const background_7 = scene.add.image(0, 1165, "Background_01");
		background_7.setOrigin(0, 0);
		background_7.tintTopLeft = 16039554;
		background_7.tintTopRight = 16039554;
		background_7.tintBottomLeft = 16039554;
		background_7.tintBottomRight = 16039554;
		bG.add(background_7);

		// background_22
		const background_22 = scene.add.image(10, -2060, "Background_01");
		background_22.setOrigin(0, 0);
		background_22.tintTopLeft = 16701851;
		background_22.tintTopRight = 16701851;
		background_22.tintBottomLeft = 16701851;
		background_22.tintBottomRight = 16701851;
		bG.add(background_22);

		// background_23
		const background_23 = scene.add.image(0, -2580, "Background_02");
		background_23.setOrigin(0, 0);
		background_23.tintTopLeft = 16764289;
		background_23.tintTopRight = 16764289;
		background_23.tintBottomLeft = 16764289;
		background_23.tintBottomRight = 16764289;
		bG.add(background_23);

		// background_25
		const background_25 = scene.add.image(0, 2281, "Background_01");
		background_25.setOrigin(0, 0);
		background_25.tintTopLeft = 16039554;
		background_25.tintTopRight = 16039554;
		background_25.tintBottomLeft = 16039554;
		background_25.tintBottomRight = 16039554;
		bG.add(background_25);

		// BG_2
		const bG_2 = scene.add.container(0, -20867);
		bG_2.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG_2);

		// rectangle_4
		const rectangle_4 = scene.add.rectangle(0, 929, 128, 128);
		rectangle_4.scaleX = 9.25;
		rectangle_4.scaleY = 38.8;
		rectangle_4.setOrigin(0, 0.5);
		rectangle_4.isFilled = true;
		rectangle_4.fillColor = 13614335;
		rectangle_4.strokeAlpha = 0;
		bG_2.add(rectangle_4);

		// background_9
		const background_9 = scene.add.image(0, -947, "Background_02");
		background_9.setOrigin(0, 0);
		background_9.tintTopLeft = 12359933;
		background_9.tintTopRight = 12359933;
		background_9.tintBottomLeft = 12359933;
		background_9.tintBottomRight = 12359933;
		bG_2.add(background_9);

		// background_10
		const background_10 = scene.add.image(0, -41, "Background_01");
		background_10.setOrigin(0, 0);
		background_10.tintTopLeft = 11175931;
		background_10.tintTopRight = 11175931;
		background_10.tintBottomLeft = 11175931;
		background_10.tintBottomRight = 11175931;
		bG_2.add(background_10);

		// background_11
		const background_11 = scene.add.image(0, 410, "Background_02");
		background_11.setOrigin(0, 0);
		background_11.tintTopLeft = 9136119;
		background_11.tintTopRight = 9136119;
		background_11.tintBottomLeft = 9136119;
		background_11.tintBottomRight = 9136119;
		bG_2.add(background_11);

		// background_12
		const background_12 = scene.add.image(0, 931, "Background_01");
		background_12.setOrigin(0, 0);
		background_12.tintTopLeft = 7951858;
		background_12.tintTopRight = 7951858;
		background_12.tintBottomLeft = 7951858;
		background_12.tintBottomRight = 7951858;
		bG_2.add(background_12);

		// BG_1
		const bG_1 = scene.add.container(0, -10335);
		bG_1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG_1);

		// background_21
		const background_21 = scene.add.image(52, -2779, "Background_02");
		background_21.setOrigin(0, 0);
		background_21.tintTopLeft = 16764289;
		background_21.tintTopRight = 16764289;
		background_21.tintBottomLeft = 16764289;
		background_21.tintBottomRight = 16764289;
		bG_1.add(background_21);

		// background_20
		const background_20 = scene.add.image(15, -2356, "Background_01");
		background_20.setOrigin(0, 0);
		background_20.tintTopLeft = 16039554;
		background_20.tintTopRight = 16039554;
		background_20.tintBottomLeft = 16039554;
		background_20.tintBottomRight = 16039554;
		bG_1.add(background_20);

		// background_8
		const background_8 = scene.add.image(0, -947, "Background_02");
		background_8.setOrigin(0, 0);
		background_8.tintTopLeft = 16769184;
		background_8.tintTopRight = 16769184;
		background_8.tintBottomLeft = 16769184;
		background_8.tintBottomRight = 16769184;
		bG_1.add(background_8);

		// background_13
		const background_13 = scene.add.image(0, -41, "Background_01");
		background_13.setOrigin(0, 0);
		background_13.tintTopLeft = 16701851;
		background_13.tintTopRight = 16701851;
		background_13.tintBottomLeft = 16701851;
		background_13.tintBottomRight = 16701851;
		bG_1.add(background_13);

		// background_14
		const background_14 = scene.add.image(0, -107, "Background_02");
		background_14.setOrigin(0, 0);
		background_14.tintTopLeft = 16764289;
		background_14.tintTopRight = 16764289;
		background_14.tintBottomLeft = 16764289;
		background_14.tintBottomRight = 16764289;
		bG_1.add(background_14);

		// background_15
		const background_15 = scene.add.image(0, 1165, "Background_01");
		background_15.setOrigin(0, 0);
		background_15.tintTopLeft = 16039554;
		background_15.tintTopRight = 16039554;
		background_15.tintBottomLeft = 16039554;
		background_15.tintBottomRight = 16039554;
		bG_1.add(background_15);

		// BG3
		const bG3 = scene.add.container(0, -16120);
		bG3.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(bG3);

		// rectangle_3
		const rectangle_3 = scene.add.rectangle(0, 929, 128, 128);
		rectangle_3.scaleX = 9.25;
		rectangle_3.scaleY = 38.8;
		rectangle_3.setOrigin(0, 0.5);
		rectangle_3.isFilled = true;
		rectangle_3.fillColor = 13614335;
		rectangle_3.strokeAlpha = 0;
		bG3.add(rectangle_3);

		// background_16
		const background_16 = scene.add.image(0, -947, "Background_02");
		background_16.setOrigin(0, 0);
		background_16.tintTopLeft = 12359933;
		background_16.tintTopRight = 12359933;
		background_16.tintBottomLeft = 12359933;
		background_16.tintBottomRight = 12359933;
		bG3.add(background_16);

		// background_17
		const background_17 = scene.add.image(0, -41, "Background_01");
		background_17.setOrigin(0, 0);
		background_17.tintTopLeft = 11175931;
		background_17.tintTopRight = 11175931;
		background_17.tintBottomLeft = 11175931;
		background_17.tintBottomRight = 11175931;
		bG3.add(background_17);

		// background_18
		const background_18 = scene.add.image(0, 410, "Background_02");
		background_18.setOrigin(0, 0);
		background_18.tintTopLeft = 9136119;
		background_18.tintTopRight = 9136119;
		background_18.tintBottomLeft = 9136119;
		background_18.tintBottomRight = 9136119;
		bG3.add(background_18);

		// background_19
		const background_19 = scene.add.image(0, 1165, "Background_01");
		background_19.setOrigin(0, 0);
		background_19.tintTopLeft = 7951858;
		background_19.tintTopRight = 7951858;
		background_19.tintBottomLeft = 7951858;
		background_19.tintBottomRight = 7951858;
		bG3.add(background_19);

		// player
		const player = scene.add.container(550, 2102);
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

		// wall_4
		const wall_4 = new Wall1(scene, 97, -21597);
		wall_4.scaleX = -1;
		wall_4.scaleY = 1;
		beginningClouds.add(wall_4);

		// wall_6
		const wall_6 = new Wall1(scene, 1184, -20451);
		wall_6.scaleX = 1;
		wall_6.scaleY = 1;
		beginningClouds.add(wall_6);

		// wall_5
		const wall_5 = new Wall1(scene, 759, -20447);
		wall_5.scaleX = 1;
		wall_5.scaleY = 1;
		beginningClouds.add(wall_5);

		// rainbow1
		const rainbow1 = scene.add.container(-22, -7874);
		rainbow1.blendMode = Phaser.BlendModes.SKIP_CHECK;
		this.add(rainbow1);

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

		// nose_26
		const nose_26 = new Nose(scene, 431, -1237);
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
		const nose_22 = new Nose(scene, 457, 707);
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
		const badThought_13 = new BadThought(scene, 185, -893);
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
		const nose_10 = new Nose(scene, 676, 691);
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
		const badThought_1 = new BadThought(scene, 186, 726);
		rainbow1.add(badThought_1);

		// badThought_5
		const badThought_5 = new BadThought(scene, 962, 735);
		rainbow1.add(badThought_5);

		// nose_11
		const nose_11 = new Nose(scene, 895, -580);
		rainbow1.add(nose_11);

		// badThought_6
		const badThought_6 = new BadThought(scene, 420, -426);
		rainbow1.add(badThought_6);

		// badThought_21
		const badThought_21 = new BadThought(scene, 166, -423);
		rainbow1.add(badThought_21);

		// mouth_17
		const mouth_17 = new Mouth(scene, 1016, -7410);
		mouth_17.scaleX = 1;
		mouth_17.scaleY = 1;
		rainbow1.add(mouth_17);

		// mouth_26
		const mouth_26 = new Mouth(scene, 1047, -10513);
		mouth_26.scaleX = 1;
		mouth_26.scaleY = 1;
		rainbow1.add(mouth_26);

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

		// rainbow
		const rainbow = new Rainbow(scene, 26, 5358);
		rainbow.scaleX = 1.05;
		rainbow.scaleY = 1.05;
		levelTwo.add(rainbow);

		// nose_12
		const nose_12 = new Nose(scene, 206, 4360);
		levelTwo.add(nose_12);

		// nose_18
		const nose_18 = new Nose(scene, 204, 3179);
		levelTwo.add(nose_18);

		// nose_32
		const nose_32 = new Nose(scene, 208, 2052);
		levelTwo.add(nose_32);

		// nose_13
		const nose_13 = new Nose(scene, 465, 4360);
		levelTwo.add(nose_13);

		// nose_19
		const nose_19 = new Nose(scene, 463, 3179);
		levelTwo.add(nose_19);

		// nose_33
		const nose_33 = new Nose(scene, 467, 2052);
		levelTwo.add(nose_33);

		// nose_14
		const nose_14 = new Nose(scene, 729, 4360);
		levelTwo.add(nose_14);

		// nose_20
		const nose_20 = new Nose(scene, 727, 3179);
		levelTwo.add(nose_20);

		// nose_34
		const nose_34 = new Nose(scene, 731, 2052);
		levelTwo.add(nose_34);

		// nose_15
		const nose_15 = new Nose(scene, 970, 4360);
		levelTwo.add(nose_15);

		// nose_21
		const nose_21 = new Nose(scene, 968, 3179);
		levelTwo.add(nose_21);

		// nose_35
		const nose_35 = new Nose(scene, 972, 2057);
		levelTwo.add(nose_35);

		// nose_25
		const nose_25 = new Nose(scene, 240, 991);
		levelTwo.add(nose_25);

		// nose_27
		const nose_27 = new Nose(scene, 499, 991);
		levelTwo.add(nose_27);

		// nose_28
		const nose_28 = new Nose(scene, 763, 991);
		levelTwo.add(nose_28);

		// nose_29
		const nose_29 = new Nose(scene, 1004, 991);
		levelTwo.add(nose_29);

		// nose_30
		const nose_30 = new Nose(scene, 250, 232);
		levelTwo.add(nose_30);

		// nose_31
		const nose_31 = new Nose(scene, 509, 232);
		levelTwo.add(nose_31);

		// nose_36
		const nose_36 = new Nose(scene, 773, 232);
		levelTwo.add(nose_36);

		// nose_37
		const nose_37 = new Nose(scene, 1014, 232);
		levelTwo.add(nose_37);

		// nose_38
		const nose_38 = new Nose(scene, 231, -646);
		levelTwo.add(nose_38);

		// nose_39
		const nose_39 = new Nose(scene, 836, -1649);
		levelTwo.add(nose_39);

		// nose_40
		const nose_40 = new Nose(scene, 1043, -1652);
		levelTwo.add(nose_40);

		// nose_41
		const nose_41 = new Nose(scene, 836, -2116);
		levelTwo.add(nose_41);

		// nose_42
		const nose_42 = new Nose(scene, 1031, -2123);
		levelTwo.add(nose_42);

		// rainbow_1
		const rainbow_1 = new Rainbow(scene, 29, -2940);
		rainbow_1.scaleX = 1.05;
		rainbow_1.scaleY = 1.05;
		levelTwo.add(rainbow_1);

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
		const badThought_16 = new BadThought(scene, 789, 1);
		container_2.add(badThought_16);

		// badThought_4
		const badThought_4 = new BadThought(scene, 48, 22);
		container_2.add(badThought_4);

		// nose_1
		const nose_1 = new Nose(scene, 518, 17);
		container_2.add(nose_1);

		// nose_16
		const nose_16 = new Nose(scene, 292, 16);
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

		// badThought_9
		const badThought_9 = new BadThought(scene, 854, -4865);
		container_2.add(badThought_9);

		// badThought_11
		const badThought_11 = new BadThought(scene, 902, -5932);
		container_2.add(badThought_11);

		// badThought_15
		const badThought_15 = new BadThought(scene, 898, -6130);
		container_2.add(badThought_15);

		// mouth_11
		const mouth_11 = new Mouth(scene, -5, -7779);
		mouth_11.scaleX = -1;
		mouth_11.scaleY = 1;
		container_2.add(mouth_11);

		// mouth_16
		const mouth_16 = new Mouth(scene, -21, -8010);
		mouth_16.scaleX = -1;
		mouth_16.scaleY = 1;
		container_2.add(mouth_16);

		// badThought_22
		const badThought_22 = new BadThought(scene, 407, -7300);
		container_2.add(badThought_22);

		// badThought_20
		const badThought_20 = new BadThought(scene, 442, -8300);
		container_2.add(badThought_20);

		// mouth_12
		const mouth_12 = new Mouth(scene, -26, -2545);
		mouth_12.scaleX = -1;
		mouth_12.scaleY = 1;
		container_2.add(mouth_12);

		// mouth_23
		const mouth_23 = new Mouth(scene, -18, -7540);
		mouth_23.scaleX = -1;
		mouth_23.scaleY = 1;
		container_2.add(mouth_23);

		// badThought_29
		const badThought_29 = new BadThought(scene, 528, -10448);
		badThought_29.scaleX = 3;
		badThought_29.scaleY = 3;
		container_2.add(badThought_29);

		// badThought_18
		const badThought_18 = new BadThought(scene, 447, -8565);
		container_2.add(badThought_18);

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
		const collectible_32 = new Collectible2(scene, 931, -14520);
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

		// collectible_36
		const collectible_36 = new Collectible2(scene, 164, -15872);
		this.add(collectible_36);

		// collectible_37
		const collectible_37 = new Collectible2(scene, 160, -15752);
		this.add(collectible_37);

		// collectible_38
		const collectible_38 = new Collectible2(scene, 166, -15637);
		this.add(collectible_38);

		// collectible_39
		const collectible_39 = new Collectible2(scene, 160, -15521);
		this.add(collectible_39);

		// collectible_40
		const collectible_40 = new Collectible2(scene, 160, -15392);
		this.add(collectible_40);

		// collectible_41
		const collectible_41 = new Collectible2(scene, 155, -15258);
		this.add(collectible_41);

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

		// mouth_17 (prefab fields)
		mouth_17.property = "p1";

		// mouth_26 (prefab fields)
		mouth_26.property = "p2";

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

		// rainbow (prefab fields)
		rainbow.text = "100m";

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

		// nose_25 (prefab fields)
		nose_25.property = "p4";

		// nose_27 (prefab fields)
		nose_27.property = "p4";

		// nose_28 (prefab fields)
		nose_28.property = "p4";

		// nose_29 (prefab fields)
		nose_29.property = "p4";

		// nose_30 (prefab fields)
		nose_30.property = "p2";

		// nose_31 (prefab fields)
		nose_31.property = "p2";

		// nose_36 (prefab fields)
		nose_36.property = "p1";

		// nose_37 (prefab fields)
		nose_37.property = "p1";

		// nose_38 (prefab fields)
		nose_38.property = "p4";

		// nose_39 (prefab fields)
		nose_39.property = "p4";

		// nose_40 (prefab fields)
		nose_40.property = "p4";

		// nose_41 (prefab fields)
		nose_41.property = "p4";

		// nose_42 (prefab fields)
		nose_42.property = "p4";

		// rainbow_1 (prefab fields)
		rainbow_1.text = "Goodbye!";

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

		// badThought_9 (prefab fields)
		badThought_9.offsetX = -770;
		badThought_9.moveDuration = 2500;
		badThought_9.moveDelay = 300;

		// badThought_11 (prefab fields)
		badThought_11.offsetX = -770;
		badThought_11.moveDuration = 2500;
		badThought_11.moveDelay = 600;

		// badThought_15 (prefab fields)
		badThought_15.offsetX = -770;
		badThought_15.moveDuration = 2500;
		badThought_15.moveDelay = 800;

		// mouth_11 (prefab fields)
		mouth_11.property = "p1";

		// mouth_16 (prefab fields)
		mouth_16.property = "p2";

		// badThought_22 (prefab fields)
		badThought_22.offsetX = 0;
		badThought_22.offsetY = -1000;
		badThought_22.moveDuration = 1300;
		badThought_22.moveDelay = 0;

		// badThought_20 (prefab fields)
		badThought_20.offsetX = 0;
		badThought_20.offsetY = 1000;
		badThought_20.moveDuration = 1300;
		badThought_20.moveDelay = 0;

		// mouth_12 (prefab fields)
		mouth_12.property = "p3";

		// mouth_23 (prefab fields)
		mouth_23.property = "p3";

		// badThought_18 (prefab fields)
		badThought_18.offsetX = 0;
		badThought_18.offsetY = 0;
		badThought_18.moveDuration = 1300;
		badThought_18.moveDelay = 0;

		// mouth_18 (prefab fields)
		mouth_18.property = "p3";

		// mouth_21 (prefab fields)
		mouth_21.property = "p3";

		// collectible_30 (prefab fields)
		collectible_30.offsetX = -820;
		collectible_30.moveDuration = 1500;

		// collectible_31 (prefab fields)
		collectible_31.offsetX = -820;
		collectible_31.moveDuration = 1500;
		collectible_31.moveDelay = 100;

		// collectible_32 (prefab fields)
		collectible_32.offsetX = -820;
		collectible_32.moveDuration = 1500;
		collectible_32.moveDelay = 200;

		// collectible_33 (prefab fields)
		collectible_33.offsetX = -820;
		collectible_33.moveDuration = 1500;
		collectible_33.moveDelay = 300;

		// collectible_34 (prefab fields)
		collectible_34.offsetX = -820;
		collectible_34.moveDuration = 1500;
		collectible_34.moveDelay = 400;

		// collectible_35 (prefab fields)
		collectible_35.offsetX = -820;
		collectible_35.moveDuration = 1500;
		collectible_35.moveDelay = 500;

		// collectible_36 (prefab fields)
		collectible_36.offsetX = 820;
		collectible_36.moveDuration = 1500;

		// collectible_37 (prefab fields)
		collectible_37.offsetX = 820;
		collectible_37.moveDuration = 1500;
		collectible_37.moveDelay = 100;

		// collectible_38 (prefab fields)
		collectible_38.offsetX = 820;
		collectible_38.moveDuration = 1500;
		collectible_38.moveDelay = 200;

		// collectible_39 (prefab fields)
		collectible_39.offsetX = 820;
		collectible_39.moveDuration = 1500;
		collectible_39.moveDelay = 300;

		// collectible_40 (prefab fields)
		collectible_40.offsetX = 820;
		collectible_40.moveDuration = 1500;
		collectible_40.moveDelay = 400;

		// collectible_41 (prefab fields)
		collectible_41.offsetX = 820;
		collectible_41.moveDuration = 1500;
		collectible_41.moveDelay = 500;

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