import {PlayerClient} from "../client/PlayerCilent.ts";
import {getPlayerClient} from "../client/BaseClient.ts";

export class MobileDisconnectedScene extends Phaser.Scene {
  playerClient!: PlayerClient;

  constructor() {
    super("MobileDisconnectedScene");
  }

  create() {
    this.playerClient = getPlayerClient();

    const readyButton = this.add.rectangle(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 100,
        500,
        250,
        0xffffff
    );

    this.add
        .text(readyButton.x, readyButton.y, "Screen Disconnected", {
          color: "#000000",
          fontSize: "40px",
        })
        .setOrigin(0.5);
  }
}