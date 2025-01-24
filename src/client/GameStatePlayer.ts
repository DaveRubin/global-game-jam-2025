import { PlayerColor } from "../game/PlayerColor";

export interface GameStatePlayer {
  id: string;
  name: string;
  color: PlayerColor;
  isOn: boolean;
  isReady: boolean;
  assignedTo: string | null;
}
