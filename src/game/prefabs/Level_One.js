
// You can write more code here

/* START OF COMPILED CODE */

class Level_One extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// bod_v01
		const bod_v01 = scene.add.image(534, 2293, "Bod_v01");
		this.add(bod_v01);

		// wall1
		const wall1 = new Wall1(scene, 551, -1447);
		wall1.scaleX = 1;
		wall1.scaleY = 1;
		this.add(wall1);

		// wall
		const wall = new Wall1(scene, 542, -547);
		wall.scaleX = -0.2;
		wall.scaleY = 0.2;
		this.add(wall);

		// rainbow
		const rainbow = new Rainbow(scene, 0, -7995);
		this.add(rainbow);

		// mouth_1
		const mouth_1 = new Mouth(scene, 76, -407);
		mouth_1.scaleX = -1;
		mouth_1.scaleY = 1;
		this.add(mouth_1);

		// mouth_2
		const mouth_2 = new Mouth(scene, 1037, -399);
		this.add(mouth_2);

		// mouth_3
		const mouth_3 = new Mouth(scene, 64, 846);
		mouth_3.scaleX = -1;
		mouth_3.scaleY = 1;
		this.add(mouth_3);

		// mouth
		const mouth = new Mouth(scene, 1067, 872);
		this.add(mouth);

		// wall_1
		const wall_1 = new Wall1(scene, 25, 1320);
		wall_1.scaleX = 0.4;
		wall_1.scaleY = 0.4;
		this.add(wall_1);

		// collectible2
		const collectible2 = new Collectible2(scene, 555, 972);
		this.add(collectible2);

		// collectible1
		const collectible1 = new Collectible1(scene, 547, 1257);
		this.add(collectible1);

		// badThought
		const badThought = new BadThought(scene, 2392, 1189);
		this.add(badThought);

		// head2
		const head2 = new Head2(scene, 528, 2093);
		this.add(head2);

		// mouth_4
		const mouth_4 = new Mouth(scene, 82, 455);
		mouth_4.scaleX = -1;
		mouth_4.scaleY = 1;
		this.add(mouth_4);

		// mouth_5
		const mouth_5 = new Mouth(scene, 1073, 478);
		this.add(mouth_5);

		// collectible_1
		const collectible_1 = new Collectible3(scene, 549, 449);
		this.add(collectible_1);

		// collectible_2
		const collectible_2 = new Collectible1(scene, 553, 129);
		this.add(collectible_2);

		// collectible_3
		const collectible_3 = new Collectible2(scene, 537, -223);
		this.add(collectible_3);

		// mouth_6
		const mouth_6 = new Mouth(scene, 67, -870);
		mouth_6.scaleX = -1;
		mouth_6.scaleY = 1;
		this.add(mouth_6);

		// mouth_7
		const mouth_7 = new Mouth(scene, 1014, -854);
		this.add(mouth_7);

		// wall_3
		const wall_3 = new Wall2(scene, 97, -1109);
		wall_3.scaleX = -0.4;
		wall_3.scaleY = 0.4;
		wall_3.angle = 0;
		this.add(wall_3);

		// wall_4
		const wall_4 = new Wall2(scene, 999, -1101);
		wall_4.scaleX = 0.4;
		wall_4.scaleY = 0.4;
		wall_4.angle = 0;
		this.add(wall_4);

		// wall_5
		const wall_5 = new Wall1(scene, 560, -1770);
		wall_5.scaleX = 1;
		wall_5.scaleY = 1;
		this.add(wall_5);

		// wall_6
		const wall_6 = new Wall1(scene, 537, -2094);
		wall_6.scaleX = 1;
		wall_6.scaleY = 1;
		this.add(wall_6);

		// wall_7
		const wall_7 = new Wall1(scene, 506, -2432);
		wall_7.scaleX = 1;
		wall_7.scaleY = 1;
		this.add(wall_7);

		// collectible
		const collectible = new Collectible3(scene, 537, 685);
		this.add(collectible);

		// wall_2
		const wall_2 = new Wall1(scene, 0, 1493);
		wall_2.scaleX = 0.2;
		wall_2.scaleY = 0.2;
		this.add(wall_2);

		// wall_8
		const wall_8 = new Wall1(scene, 1096, 1333);
		wall_8.scaleX = -0.4;
		wall_8.scaleY = 0.4;
		this.add(wall_8);

		// wall2
		const wall2 = new Wall2(scene, 1106, 1487);
		wall2.scaleX = 0.25;
		wall2.scaleY = 0.25;
		this.add(wall2);

		// rainbow (prefab fields)
		rainbow.text = "150m";

		// mouth_1 (prefab fields)
		mouth_1.property = "p3";

		// mouth_2 (prefab fields)
		mouth_2.property = "p2";

		// mouth_3 (prefab fields)
		mouth_3.property = "p3";

		// mouth (prefab fields)
		mouth.property = "p2";

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
