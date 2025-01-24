import { getPlayerClient } from "../client/BaseClient";
import { PlayerClient } from "../client/PlayerCilent";
import {GameStateScreen} from "../client/GameState.ts";

export class MobileGameScene extends Phaser.Scene {
  playerClient!: PlayerClient;

  constructor() {
    super("MobileGameScene");
  }

  async create() {
    this.playerClient = getPlayerClient();

    this.playerClient.onGameChangeScreen = (screen: GameStateScreen) => {
      if (screen === GameStateScreen.DISCONNECTED) {
        this.game.scene.start("MobileDisconnectedScene");
      }
    };


    const colors = this.playerClient.player.colors;

// Get screen dimensions
    const screenWidth = this.cameras.main.width;
    const screenHeight = this.cameras.main.height;

// Helper to create a rectangle
    const createRectangle = (x: number, y: number, width: number, height: number, color: number) => {
      const rect = this.add.rectangle(x, y, width, height, color).setOrigin(0, 0);
      rect.setInteractive();
      rect.on("pointerdown", () => {
        this.playerClient.togglePlayerOn(color, true);

        // Add a global pointerup listener to ensure it gets called regardless of where it's released
        const pointerUpHandler = () => {
          this.playerClient.togglePlayerOn(color, false);
          // Remove the global listener after it is called
          window.removeEventListener("pointerup", pointerUpHandler);
        };

        // Attach the global pointerup listener
        window.addEventListener("pointerup", pointerUpHandler);
      });

      return rect;
    };

// Clear existing background (optional, depending on context)
    this.children.removeAll();

// Render based on the number of colors
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
  }
}
