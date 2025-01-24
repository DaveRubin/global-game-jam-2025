import { PlayerType } from "./consts";

export function getPlayerTrigger(scene: Phaser.Scene, player: PlayerType, callback: (isDown: boolean) => void) {

    scene.events.on(`${player}-down`, () => callback(true));
    scene.events.on(`${player}-up`, () => callback(false));
}