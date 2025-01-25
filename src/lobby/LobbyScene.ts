import { getStageClient } from "../client/BaseClient";
import { StageClient } from "../client/StageClient";
import { PlayerColor } from "../game/PlayerColor";
import encodeQR from "@paulmillr/qr";
import { Lobby } from "./Lobby";


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


  }

  preload() {
    const stageClient = getStageClient();
    this.load.pack("section1", "public/asset-pack.json");
    const gameUrl = `${window.location.origin}${window.location.pathname}?game-id=${stageClient.gameId}`;
    const gifBytes = encodeQR(gameUrl, "gif", { scale: 25 }); // Uncompressed GIF
    const blob = new Blob([gifBytes], { type: "image/gif" });
    const url = URL.createObjectURL(blob);
    this.load.image("qr-code", url);
  }

  create() {
    const lobby = new Lobby(this);
    this.add.existing(lobby);
  }
}
