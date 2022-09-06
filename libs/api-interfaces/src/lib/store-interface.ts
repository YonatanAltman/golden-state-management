import {Observable} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";

export interface ITeamStore {
  getHomeImages$(): Observable<string[]>;

  getPlayers$(): Observable<Player[]>;

  getPlayer$(id: string): Observable<Player>;
}



