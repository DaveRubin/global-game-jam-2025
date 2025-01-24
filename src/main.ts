// import { setupCounter } from './counter.ts'
// import { initBabylon } from './babylonIntro.ts'
import { PlayerClient } from "./client/PlayerCilent";
import { StageClient } from "./client/StageClient";
import "./game/PhaserGame";

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get("game-id");
  if (gameId) {
    const playerClient = new PlayerClient(gameId);
    const playerId = await playerClient.connect();
    if (!playerId) {
      console.log("No player found");
      return;
    }
    console.log("Player found", playerId);
    window.onmousedown = () => {
      console.log("mouse down");
      playerClient.togglePlayerButton(true);
    };
    window.onmouseup = () => {
      console.log("mouse up");
      playerClient.togglePlayerButton(false);
    };
  } else {
    const stageClient = new StageClient();
    const gameId = await stageClient.connect();
    console.log(`${window.location.pathname}?game-id=${gameId}`);
    stageClient;
    // Show QR Code
  }
}

init();

// initBabylon();
