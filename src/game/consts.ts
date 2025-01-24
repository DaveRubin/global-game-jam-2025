export const coloredImages = ['noseSuck', 'noseIdle'];

export type PlayerType = 'p1' | 'p2' | 'p3' | 'p4';

export const KEY_BINDING: Record<PlayerType, string> = {
    p1: "A",
    p2: "B",
    p3: "C",
    p4: "D",
}

export const PLAYER_COLORS: Record<PlayerType, number> = {
    p1: 0xFFFFFF,
    p2: 0xE96CD6,
    p3: 0x79F66F,
    p4: 0x75F4EF,
}


export const GAME_HEIGHT = 2436;

const ratio = window.innerHeight / GAME_HEIGHT;

export const GAME_WIDTH = window.innerWidth / ratio;
