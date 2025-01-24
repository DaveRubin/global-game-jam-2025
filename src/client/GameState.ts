import { GameStatePlayer } from "./GameStatePlayer";

export interface GameState {
  players: {
    p1: GameStatePlayer;
    p2: GameStatePlayer;
    p3: GameStatePlayer;
    p4: GameStatePlayer;
  };
}
