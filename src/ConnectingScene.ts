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
    console.log(`${window.location.pathname}?game-id=${gameId}`);

    stageClient.onPlayerOnCallbacks = (player) => {
      console.log("player on", player);
    };
    stageClient.onPlayerReadyCallbacks = (player) => {
      console.log("player ready", player);
    };
  } else {
    const playerClient = getPlayerClient();
    const playerId = await playerClient.connect();
    if (!playerId) {
      console.log("No player found");
      return;
    }
    console.log("Player found", playerId);
  }
}

export class ConnectingScene extends Phaser.Scene {
  async create() {
    await init();

    if (isHost()) {
      this.scene.start("LobbyScene");
    } else {
      this.scene.start("MobileScene");
    }
  }
}
