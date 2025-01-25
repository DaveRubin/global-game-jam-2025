import {
  getPlayerClient,
  getStageClient,
  initClient,
  isHost,
} from "./client/BaseClient";

async function init() {
  const isHost = initClient();
  if (isHost) {
    const stageClient = getStageClient();
    const gameId = await stageClient.connect();
    if (!gameId) {
      return false;
    }
    console.log(`${window.location.pathname}?game-id=${gameId}`);

    stageClient.onPlayerOnCallbacks = (player) => {
      console.log("player on", player);
    };
    stageClient.onPlayerReadyCallbacks = (player) => {
      console.log("player ready", player);
    };
    window.addEventListener("beforeunload", (_) => {
      stageClient.shutdown();
    });
    return true;
  } else {
    const playerClient = getPlayerClient();
    const playerId = await playerClient.connect();
    if (!playerId) {
      console.log("No player found");
      return false;
    }
    console.log("Player found", playerId);
    window.addEventListener("beforeunload", (_) => {
      playerClient.shutdown();
    });
    return true;
  }
}

export class ConnectingScene extends Phaser.Scene {
  constructor() {
    super("ConnectingScene");
  }
  async create() {
    const success = await init();
    if (!success) {
      this.scene.start("MobileDisconnectedScene");
      return;
    }

    if (isHost()) {
      this.scene.start("GameScene");
    } else {
      this.scene.start("MobileLobbyScene");
    }
  }
}
