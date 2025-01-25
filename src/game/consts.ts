export const coloredImages = ['noseSuck', 'noseIdle'];

export type PlayerType = 'p1' | 'p2' | 'p3' | 'p4';

export const KEY_BINDING: Record<PlayerType, string> = {
    p1: "Z",
    p2: "X",
    p3: "C",
    p4: "V",
}

export const PLAYER_COLORS: Record<PlayerType, number> = {
    p1: 0xFBFB53,
    p2: 0xE96CD6,
    p3: 0x79F66F,
    p4: 0x75F4EF,
}


export const GAME_HEIGHT = 2436;
export const GAME_WIDTH = 1125;
