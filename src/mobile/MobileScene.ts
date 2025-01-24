import { getPlayerClient } from "../client/BaseClient";
import { GameStateScreen } from "../client/GameState";
import { PlayerClient } from "../client/PlayerCilent";

export class MobileScene extends Phaser.Scene {
  playerClient!: PlayerClient;

  constructor() {
    super("MobileScene");
  }

  async create() {
    this.playerClient = getPlayerClient();

    const darkerColor = Phaser.Display.Color.ValueToColor(
      this.playerClient.player.color
    ).darken(30);
    this.cameras.main.setBackgroundColor(darkerColor.color);

    const originalColor = darkerColor.color;
    const lighterColor = Phaser.Display.Color.ValueToColor(
      this.playerClient.player.color
    ).lighten(30).color;

    const background = this.add
      .rectangle(
        0,
        0,
        this.cameras.main.width,
        this.cameras.main.height,
        0x000000,
        0
      )
      .setOrigin(0, 0);

    background.setInteractive();

    background.on("pointerdown", () => {
      if (!this.playerClient.player.isReady) {
        return;
      }
      this.playerClient.togglePlayerOn(true);
      this.tweens.add({
        targets: this.cameras.main,
        backgroundColor: lighterColor,
        duration: 200,
      });
    });

    background.on("pointerup", () => {
      if (!this.playerClient.player.isReady) {
        const isReady = this.playerClient.player.isReady;
        this.playerClient.togglePlayerReady(!isReady);
        readyText.setText(isReady ? "Not Ready" : "Ready");
        return;
      }
      this.playerClient.togglePlayerOn(false);
      this.tweens.add({
        targets: this.cameras.main,
        backgroundColor: originalColor,
        duration: 200,
      });
    });

    const readyButton = this.add.rectangle(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 100,
      200,
      50,
      0xffffff
    );

    const readyText = this.add
      .text(readyButton.x, readyButton.y, "Not Ready", {
        color: "#000000",
        fontSize: "24px",
      })
      .setOrigin(0.5);

    this.playerClient.onGameChangeScreen = (screen: GameStateScreen) => {
      if (screen === GameStateScreen.GAME) {
        this.game.scene.start("MobileGameScene");
      }
    };
  }
}
