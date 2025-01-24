import { GameStatePlayer } from "./GameStatePlayer";

export interface GameState {
  screen: GameStateScreen;
  players: {
    p1: GameStatePlayer;
    p2: GameStatePlayer;
    p3: GameStatePlayer;
    p4: GameStatePlayer;
  };
}

export enum GameStateScreen {
  LOBBY = "lobby",
  GAME = "game",
}
