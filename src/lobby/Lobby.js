import { PlayerColor } from "../game/PlayerColor";
import { getStageClient } from "../client/BaseClient";
import { PlayerOpeningIndication } from "../game/prefabs/PlayerOpeningIndication";

// You can write more code here

let debugKeyCount = 0;
let debugKeyTimeout;

const DEBUG_KEY = "q";
const DEBUG_ACTIVATION_COUNT = 3;
const DEBUG_TIMEOUT = 1000; // 1 second to reset the counter if not pressed consecutively

/* START OF COMPILED CODE */

class Lobby extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 107, y ?? 165);

		this.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// logo_1
		const logo_1 = scene.add.image(456, 1048, "Ref_1");
		logo_1.visible = false;
		this.add(logo_1);

		// QR
		const qR = scene.add.rectangle(474, 1031, 128, 128);
		qR.name = "QR";
		qR.scaleX = 4.806442681550568;
		qR.scaleY = 4.806442681550568;
		qR.isFilled = true;
		this.add(qR);

		// P1_
		const p1_ = new PlayerOpeningIndication(scene, 134, 1655);
		p1_.name = "P1_";
		p1_.scaleX = 2;
		p1_.scaleY = 2;
		this.add(p1_);

		// P2_
		const p2_ = new PlayerOpeningIndication(scene, 364, 1655);
		p2_.name = "P2_";
		p2_.scaleX = 2;
		p2_.scaleY = 2;
		this.add(p2_);

		// P3_
		const p3_ = new PlayerOpeningIndication(scene, 580, 1655);
		p3_.name = "P3_";
		p3_.scaleX = 2;
		p3_.scaleY = 2;
		this.add(p3_);

		// P4_
		const p4_ = new PlayerOpeningIndication(scene, 784, 1655);
		p4_.name = "P4_";
		p4_.scaleX = 2;
		p4_.scaleY = 2;
		this.add(p4_);

		// Frame
		const frame = scene.add.image(902, 1692, "GridFrame");
		frame.setOrigin(1, 0.5);
		this.add(frame);

		// logo
		const logo = scene.add.image(464, 302, "Logo");
		logo.scaleX = 0.9420280827601931;
		logo.scaleY = 0.9420280827601931;
		this.add(logo);

		/* START-USER-CTR-CODE */
		const qrSprite = scene.add.sprite(qR.x, qR.y, "qr-code");
		const absSize = qR.width * qR.scaleX;
		const ratio = absSize / qrSprite.width;
		qrSprite.setScale(ratio);
		this.add(qrSprite);


		this.stageClient = getStageClient();
		// this.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, "qr-code");
		// Write your code here.

		this.awake();

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	awake() {
		const players = {
			[PlayerColor.BLUE]: this.getByName("P1_"),
			[PlayerColor.GREEN]: this.getByName("P2_"),
			[PlayerColor.YELLOW]: this.getByName("P3_"),
			[PlayerColor.RED]: this.getByName("P4_"),
		};

		Object.entries(players).forEach(([color, p]) => {
			p.init(color)
		});


		this.stageClient.onPlayerAssignedCallbacks = (player) => {
			const p = players[player.baseColor]
			p.setAssigned(!!player.assignedTo)
		};

		this.stageClient.onPlayerReadyCallbacks = (player) => {
			const p = players[player.baseColor]
			p.ready(player.isReady)
		};

		this.stageClient.onScreenChanged = _ => {
			this.scene.start("GameScene");
		};

		this.scene.input.keyboard.on("keydown", (event) => {
			if (event.key.toLowerCase() === DEBUG_KEY) {
				debugKeyCount++;

				// If the user presses the debug key `DEBUG_ACTIVATION_COUNT` times consecutively
				if (debugKeyCount === DEBUG_ACTIVATION_COUNT) {
					console.log("Debug mode activated!");
					// @ts-ignore
					window.isDebugMode = true;
					this.scene.start("GameScene"); // Start the GameScene
					debugKeyCount = 0; // Reset the counter
					clearTimeout(debugKeyTimeout); // Clear the timeout if debug mode is activated
					return;
				}

				// Reset the counter after `DEBUG_TIMEOUT` milliseconds
				clearTimeout(debugKeyTimeout);
				debugKeyTimeout = setTimeout(() => {
					debugKeyCount = 0;
				}, DEBUG_TIMEOUT);
			}
		});
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

export { Lobby };