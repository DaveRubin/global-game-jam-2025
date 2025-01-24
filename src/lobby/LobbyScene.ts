import { getStageClient } from "../client/BaseClient";
import { StageClient } from "../client/StageClient";
import { PlayerColor } from "../game/PlayerColor";
import encodeQR from "@paulmillr/qr";
import { Lobby } from "./Lobby";
import { GAME_WIDTH, GAME_HEIGHT } from "../game/consts";


let debugKeyCount = 0;
let debugKeyTimeout;

const DEBUG_KEY = "q";
const DEBUG_ACTIVATION_COUNT = 3;
const DEBUG_TIMEOUT = 1000; // 1 second to reset the counter if not pressed consecutively

export class LobbyScene extends Phaser.Scene {
  stageClient: StageClient;
  bluePlayer!: Phaser.GameObjects.Rectangle;
  greenPlayer!: Phaser.GameObjects.Rectangle;
  yellowPlayer!: Phaser.GameObjects.Rectangle;
  redPlayer!: Phaser.GameObjects.Rectangle;
  players!: {
    [PlayerColor.YELLOW]: Phaser.GameObjects.Rectangle;
    [PlayerColor.GREEN]: Phaser.GameObjects.Rectangle;
    [PlayerColor.RED]: Phaser.GameObjects.Rectangle;
    [PlayerColor.BLUE]: Phaser.GameObjects.Rectangle
  };
  constructor() {
    super("LobbyScene");

    this.stageClient = getStageClient();
  }

  preload() {
    const gameUrl = `${window.location.origin}${window.location.pathname}?game-id=${this.stageClient.gameId}`;
    const gifBytes = encodeQR(gameUrl, "gif", { scale: 25 }); // Uncompressed GIF
    const blob = new Blob([gifBytes], { type: "image/gif" });
    const url = URL.createObjectURL(blob);
    this.load.image("qr-code", url);
  }

  create() {

    const lobby = new Lobby(this);
    this.add.existing(lobby);

    const playerY = 0;
    this.bluePlayer = this.add.rectangle(
      50,
      playerY,
      50,
      50,
      Phaser.Display.Color.ValueToColor(PlayerColor.BLUE).darken(30).color
    );
    this.greenPlayer = this.add.rectangle(
      100 + 10,
      playerY,
      50,
      50,
      Phaser.Display.Color.ValueToColor(PlayerColor.GREEN).darken(30).color
    );
    this.yellowPlayer = this.add.rectangle(
      150 + 20,
      playerY,
      50,
      50,
      Phaser.Display.Color.ValueToColor(PlayerColor.YELLOW).darken(30).color
    );
    this.redPlayer = this.add.rectangle(
      200 + 30,
      playerY,
      50,
      50,
      Phaser.Display.Color.ValueToColor(PlayerColor.RED).darken(30).color
    );

    this.players = {
      [PlayerColor.BLUE]: this.bluePlayer,
      [PlayerColor.GREEN]: this.greenPlayer,
      [PlayerColor.YELLOW]: this.yellowPlayer,
      [PlayerColor.RED]: this.redPlayer,
    };

    Object.values(this.players).forEach((player) => {
      player.visible = false;
    });

    this.stageClient.onPlayerAssignedCallbacks = (player) => {
      this.players[player.baseColor].visible = !!player.assignedTo;
    };
    this.stageClient.onPlayerReadyCallbacks = (player) => {
      const playerRect = this.players[player.baseColor].fillColor;
      const darkenColor =
        Phaser.Display.Color.ValueToColor(playerRect).darken(30).color;

      this.players[player.baseColor].fillColor = player.isReady
        ? player.baseColor
        : darkenColor;
    };

    this.stageClient.onScreenChanged = _ => {
      this.scene.start("GameScene");
    };

    this.add.sprite(GAME_WIDTH / 2, GAME_HEIGHT / 2, "qr-code");

    this.input.keyboard.on("keydown", (event) => {
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
}
