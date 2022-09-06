import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {TeamStore, TeamState} from './team.store';
import {TeamQuery} from "./team.query";
import {Observable} from "rxjs";
import {GOLDEN_STATE_NAME, Player} from "@golden-state-management/api-interfaces";

@Injectable({providedIn: 'root'})
export class TeamService extends NgEntityService<TeamState> {

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

  getImage() {
    return this.query.getImage();
  }

  getPlayers(): Observable<Player[][]> | Observable<Player[] | undefined> {
    return this.query.getActivePlayers();
  }

  getPlayer(id: string): Observable<Player | undefined> {
    return this.query.getPlayer(id);
  }

}
