import {getPlayerClient} from "../client/BaseClient";
import {GameStateScreen} from "../client/GameState";
import {PlayerClient} from "../client/PlayerCilent";

export class MobileLobbyScene extends Phaser.Scene {
  playerClient!: PlayerClient;

  constructor() {
    super("MobileLobbyScene");
  }

  async create() {
    this.playerClient = getPlayerClient();

    const changeColors = () => {
      const colors = this.playerClient.colors;

// Get screen dimensions
      const screenWidth = this.cameras.main.width;
      const screenHeight = this.cameras.main.height;

      const createRectangle = (x: number, y: number, width: number, height: number, color: number) => {
        return this.add.rectangle(x, y, width, height, color).setOrigin(0, 0);
      };

      this.children.removeAll();

      if (!colors || !colors.length) {
        return;
      }

      if (colors.length === 1) {
        // One color: Full-screen rectangle
        createRectangle(0, 0, screenWidth, screenHeight, colors[0]);
      } else if (colors.length === 2) {
        // Two colors: Split horizontally
        createRectangle(0, 0, screenWidth, screenHeight / 2, colors[0]);
        createRectangle(0, screenHeight / 2, screenWidth, screenHeight / 2, colors[1]);
      } else if (colors.length === 4) {
        // Four colors: Quadrants
        const halfWidth = screenWidth / 2;
        const halfHeight = screenHeight / 2;
        createRectangle(0, 0, halfWidth, halfHeight, colors[0]);
        createRectangle(halfWidth, 0, halfWidth, halfHeight, colors[1]);
        createRectangle(0, halfHeight, halfWidth, halfHeight, colors[2]);
        createRectangle(halfWidth, halfHeight, halfWidth, halfHeight, colors[3]);
      }

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
          window.removeEventListener('pointerup', pointerUpHandler);
          this.game.scene.start("MobileGameScene");
        }
        if (screen === GameStateScreen.DISCONNECTED) {
          window.removeEventListener('pointerup', pointerUpHandler);
          this.game.scene.start("MobileDisconnectedScene");
        }
      };

      const pointerUpHandler = () => {
        const targetReady = !this.playerClient.player.isReady;
        readyText.setText(targetReady ? 'Ready' : 'Not Ready')
        this.playerClient.togglePlayerReady(targetReady);
      }
      window.removeEventListener('pointerup', pointerUpHandler);
      window.addEventListener("pointerup", pointerUpHandler);
    };

    this.playerClient.onPlayerColorsChange = changeColors;
    changeColors();
  }
}
