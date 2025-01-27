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

  preload() {
    this.load.image('loading', 'public/Sprites/Loading/Loading_Frame_02.png');
    this.load.image('logo', 'public/Sprites/Opening/Logo.png');
    this.load.image('background1', 'public/Background_01.png');
    this.load.image('background2', 'public/Background_02.png');
    this.load.image('body', 'public/Sprites/Player/Bod.png');
    this.load.image('hat', 'public/Sprites/Player/Hat.png');
    this.load.image('happy', 'public/Sprites/Player/Head_Idle.png');

    this.load.on('complete', async () => {
      const success = await init();
      if (!success) {
        this.scene.start("MobileDisconnectedScene");
        return;
      }

      if (isHost()) {
        this.scene.start("BootScene");
      } else {
        this.scene.start("MobileLobbyScene");
      }
    });
  }

  async create() {

  }
}
