import { getPlayerClient } from "../client/BaseClient";
import { PlayerClient } from "../client/PlayerCilent";

export class MobileGameScene extends Phaser.Scene {
  playerClient!: PlayerClient;

  constructor() {
    super("MobileGameScene");
  }

  async create() {
    this.playerClient = getPlayerClient();

    const color = this.playerClient.player.color;
    const background = this.add
      .rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, color)
      .setOrigin(0, 0);

    background.setInteractive();

    background.on("pointerdown", () => {
      this.playerClient.togglePlayerOn(true);
    });

    background.on("pointerup", () => {
      this.playerClient.togglePlayerOn(false);
    });
  }
}
