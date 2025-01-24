import { PlayerClient } from "./PlayerCilent";
import { StageClient } from "./StageClient";

var initialized = false;
var playerClient: PlayerClient;
var stageClient: StageClient;

export function isHost(): boolean {
  return stageClient != null;
}

export function initClient() {
  if (!initialized) {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get("game-id");
    if (gameId) {
      playerClient = new PlayerClient(gameId!);
    } else {
      stageClient = new StageClient();
    }
    initialized = true;
  }
  return isHost();
}

export function getStageClient(): StageClient {
  if (!initialized) {
    initClient();
  }
  return stageClient;
}

export function getPlayerClient(): PlayerClient {
  if (!initialized) {
    initClient();
  }
  return playerClient;
}
