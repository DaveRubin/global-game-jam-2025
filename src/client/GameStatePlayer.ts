import { PlayerColor } from "../game/PlayerColor";

export interface GameStatePlayer {
  id: string;
  name: string;
  baseColor: PlayerColor;
  colors: {
    [PlayerColor.BLUE]: boolean
    [PlayerColor.GREEN]: boolean
    [PlayerColor.YELLOW]: boolean
    [PlayerColor.RED]: boolean
  };
  isReady: boolean;
  assignedTo: string | null;
}

