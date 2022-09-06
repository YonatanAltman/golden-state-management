import {BaseTeamMember, Player} from "./api-player";

export interface Team {
  name:string;
  coach: BaseTeamMember;
  players: Player[];
  state?:string;
  home?:string;
  homeImages: string[];
}
export const GOLDEN_STATE_NAME = 'Golden State';
