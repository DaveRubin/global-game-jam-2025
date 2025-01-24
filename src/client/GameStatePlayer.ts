import { PlayerColor } from "../game/PlayerColor";

export interface GameStatePlayer {
  id: string;
  name: string;
  baseColor: PlayerColor;
  colors: PlayerColor[];
  isOn: boolean;
  isReady: boolean;
  assignedTo: string | null;
}
