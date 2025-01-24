import { GameStatePlayer } from "./GameStatePlayer";

export interface GameState {
  players: [GameStatePlayer, GameStatePlayer, GameStatePlayer, GameStatePlayer];
}
