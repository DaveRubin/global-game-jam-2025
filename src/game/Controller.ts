import { KEY_BINDING } from "./consts";

export class Controller {
    static status: { [key in keyof typeof KEY_BINDING]: boolean } = {
        p1: false,
        p2: false,
        p3: false,
        p4: false,
    }

    constructor(scene: Phaser.Scene) {
        Object.entries(KEY_BINDING).forEach(([key, value]) => {
            scene.input.keyboard?.addKey(value).on('down', () => {
                scene.events.emit(`${key}-down`);
                Controller.status[key as keyof typeof KEY_BINDING] = true;
            });
            scene.input.keyboard?.addKey(value).on('up', () => {
                scene.events.emit(`${key}-up`);
                Controller.status[key as keyof typeof KEY_BINDING] = false;
            });
        });
    }

}