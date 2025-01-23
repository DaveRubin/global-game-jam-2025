
const KEY_BINDING = {
    player1: "A",
    player2: "B",
    player3: "C",
    player4: "D",
}


export class Controller {
    static status: { [key in keyof typeof KEY_BINDING]: boolean } = {
        player1: false,
        player2: false,
        player3: false,
        player4: false,
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