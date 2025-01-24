import { KEY_BINDING, PlayerType } from "./consts";
import {getStageClient} from "../client/BaseClient.ts";
import {PlayerColor} from "./PlayerColor.ts";

export class Controller {
    static status: { [key in PlayerType]: boolean } = {
        p1: false,
        p2: false,
        p3: false,
        p4: false,
    }

    constructor(scene: Phaser.Scene) {
        // @ts-ignore
        if (window.isDebugMode) {
            Object.entries(KEY_BINDING).forEach(([key, value]) => {
                scene.input.keyboard?.addKey(value).on('down', () => {
                    scene.events.emit(`${key}-down`);
                    Controller.status[key as PlayerType] = true;
                });
                scene.input.keyboard?.addKey(value).on('up', () => {
                    scene.events.emit(`${key}-up`);
                    Controller.status[key as PlayerType] = false;
                });
            });
        }

        const stageClient = getStageClient();
        stageClient.onPlayerOnCallbacks = ((color, isOn) => {
            const translatedPlayer = {
                [PlayerColor.BLUE]: 'p1',
                [PlayerColor.GREEN]: 'p4',
                [PlayerColor.YELLOW]: 'p2',
                [PlayerColor.RED]: 'p3',
            }[color];
            scene.events.emit(`${translatedPlayer}-${isOn ? 'down' : 'up'}`);
        });
    }

}