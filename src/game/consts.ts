export const coloredImages = ['noseSuck', 'noseIdle'];

export type Player = 'p1' | 'p2' | 'p3' | 'p4';

export const KEY_BINDING: Record<Player, string> = {
    p1: "A",
    p2: "B",
    p3: "C",
    p4: "D",
}

export const PLAYER_COLORS: Record<Player, number> = {
    p1: 0x8462FB,
    p2: 0xF8E11E,
    p3: 0xF65862,
    p4: 0x46F771,
}