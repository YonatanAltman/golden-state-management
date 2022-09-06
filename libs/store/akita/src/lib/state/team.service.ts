import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {TeamStore, TeamState} from './team.store';
import {TeamQuery} from "./team.query";
import {Observable} from "rxjs";
import {GOLDEN_STATE_NAME, ITeamStore, Player} from "@golden-state-management/api-interfaces";

@Injectable({providedIn: 'root'})
export class TeamService extends NgEntityService<TeamState> implements ITeamStore{

  constructor(store: TeamStore, private query: TeamQuery) {
    super(store);
  }

  public init() {
    this.store.setLoading(true);
    console.log('setLoading');
    this.get().subscribe(_ => {
      this.store.setActive(GOLDEN_STATE_NAME);
      console.log('getActive',this.query.getActive())
      this.store.setLoading(false);
    });
  }

  getHomeImages$(): Observable<string[]> {
    return this.query.getImage();
  }

  getPlayer$(id: string): Observable<Player> {
    return this.query.getPlayer(id);
  }

  getPlayers$(): Observable<Player[]> {
    return this.query.getActivePlayers();
  }

}
