import {getPlayerClient} from "../client/BaseClient";
import {GameStateScreen} from "../client/GameState";
import {PlayerClient} from "../client/PlayerCilent";
import {PlayerColor} from "../game/PlayerColor.ts";

export class MobileLobbyScene extends Phaser.Scene {
  playerClient!: PlayerClient;
  private readyContainer: Phaser.GameObjects.Container;
  private notReady: Phaser.GameObjects.Sprite;
  private ready: Phaser.GameObjects.Sprite;
  private clickable = {
    [PlayerColor.BLUE]:'P1_Smile',
    [PlayerColor.GREEN]:'P2_Smile',
    [PlayerColor.YELLOW]: 'P3_Smile',
    [PlayerColor.RED]:'P4_Smile'
  };
  private baseColor: PlayerColor;
  private clickColor: number;
  private image: Phaser.GameObjects.Sprite;
  private imageTween: Phaser.Tweens.Tween;
  private isOddClick = 1;

  constructor() {
    super("MobileLobbyScene");
  }

  async create() {
    this.playerClient = getPlayerClient();

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.baseColor = this.playerClient.player.baseColor;
    this.clickColor = Phaser.Display.Color.IntegerToColor(this.baseColor).brighten(20).color32;
    this.cameras.main.setBackgroundColor(this.baseColor);

    this.image = this.add.sprite(width / 2, height / 2 + 300, this.clickable[this.baseColor]);
    this.image.scale = 0.25;
    this.image.alpha = 1;

    this.readyContainer = this.add.container(width / 2, height / 2 - 200)
    this.notReady = this.add.sprite(0, 0, 'TAP_WhenReady');
    this.ready = this.add.sprite(0, 0, 'P_Ready');
    this.ready.setVisible(false);
    this.readyContainer.alpha = 1;
    this.readyContainer.add(this.notReady);
    this.readyContainer.add(this.ready);
    this.readyContainer.scale = 0.25;

    window.addEventListener("pointerup", () => this.onPointerUp());
    window.addEventListener("pointerdown", () => this.onPointerDown());


    this.connectToReady();
  }

  connectToReady() {

    this.playerClient.onGameChangeScreen = (screen: GameStateScreen) => {
      if (screen === GameStateScreen.GAME) {
        window.removeEventListener('pointerup', lobbyPointerUpHandler);
        this.readyContainer.alpha = 0;
        if (this.playerClient.colors.length > 1) {
          this.game.scene.start("MobileGameScene");
        }
        else {
          this.connectToGame();
        }
      }
      if (screen === GameStateScreen.DISCONNECTED) {
        window.removeEventListener('pointerup', lobbyPointerUpHandler);
        this.game.scene.start("MobileDisconnectedScene");
      }
    };

    const lobbyPointerUpHandler = () => {
      const targetReady = !this.playerClient.player.isReady;
      this.ready.setVisible(targetReady);
      this.notReady.setVisible(!targetReady);
      this.playerClient.togglePlayerReady(targetReady);
    }
    window.removeEventListener('pointerup', lobbyPointerUpHandler);
    window.addEventListener("pointerup", lobbyPointerUpHandler);
  }

  onPointerDown() {
    console.log('onPointerDown');
    this.cameras.main.setBackgroundColor(this.clickColor);

    this.imageTween?.stop();
    this.image.alpha = 1;
    this.image.angle = Math.random() * 30 * this.isOddClick;
    this.isOddClick *= -1;
    const pointer = this.input.activePointer;
    this.image.x = pointer.x;
    this.image.y = pointer.y;
    this.imageTween = this.tweens.add({
      targets: this.image,
      duration: 300, // Duration of the tween in milliseconds
      alpha: 0,
      ease: 'Power2', // Easing function for a smooth transition
      delay: 600
    });
  }

  onPointerUp() {
    console.log('onPointerUp');
    this.cameras.main.setBackgroundColor(this.baseColor);
  }

  private connectToGame() {
    window.addEventListener("pointerdown", () => this.gamePointerDown());
    window.addEventListener("pointerup", () => this.gamePointerUp());
  }

  private gamePointerDown() {
    this.playerClient.togglePlayerOn(this.baseColor, true);
  }

  private gamePointerUp() {
    this.playerClient.togglePlayerOn(this.baseColor, false);
  }
}
