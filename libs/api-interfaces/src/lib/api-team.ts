import {BaseTeamMember, Player} from "./api-player";

export interface Team {
  name: string;
  players: Player[];
  couch: BaseTeamMember;
  state: string;
  home: string;
}
