import { getStageClient } from "../client/BaseClient";
import { StageClient } from "../client/StageClient";
import { PlayerColor } from "../game/PlayerColor";
import QRCode from "qrcode";
export class LobbyScene extends Phaser.Scene {
  stageClient: StageClient;
  bluePlayer!: Phaser.GameObjects.Rectangle;
  greenPlayer!: Phaser.GameObjects.Rectangle;
  yellowPlayer!: Phaser.GameObjects.Rectangle;
  redPlayer!: Phaser.GameObjects.Rectangle;
  players!: {
    255: Phaser.GameObjects.Rectangle;
    65280: Phaser.GameObjects.Rectangle;
    16776960: Phaser.GameObjects.Rectangle;
    16711680: Phaser.GameObjects.Rectangle;
  };
  constructor() {
    super("LobbyScene");

    this.stageClient = getStageClient();
  }

  preload() {}

  create() {
    this.add.text(100, 100, "Lobby");

    const playerY = 300;
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
      this.players[player.color].visible = !!player.assignedTo;
    };
    this.stageClient.onPlayerReadyCallbacks = (player) => {
      const playerRect = this.players[player.color].fillColor;
      const darkenColor =
        Phaser.Display.Color.ValueToColor(playerRect).darken(30).color;

      this.players[player.color].fillColor = player.isReady
        ? player.color
        : darkenColor;
    };

    this.stageClient.onPlayerOnCallbacks = (player) => {
      if (player.isOn) {
        this.players[player.color].y = playerY + 30;
      } else {
        this.players[player.color].y = playerY;
      }
    };

    const gameUrl = `${window.location.origin}${window.location.pathname}?game-id=${this.stageClient.gameId}`;

    // Use QR code library to generate code
    QRCode.toCanvas(document.getElementById("canvas"), gameUrl, {
      width: 300,
      margin: 2,
    });
  }
}
