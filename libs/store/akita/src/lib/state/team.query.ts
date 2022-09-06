import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {TeamStore, TeamState} from './team.store';
import {map, Observable} from "rxjs";
import {GOLDEN_STATE_NAME, Player} from "@golden-state-management/api-interfaces";

@Injectable({providedIn: 'root'})
export class TeamQuery extends QueryEntity<TeamState> {

  constructor(store: TeamStore) {
    super(store);
  }

  getPlayers() {
    return this.selectEntity(GOLDEN_STATE_NAME).pipe(map(team => team?.players || []));
  }

  getActivePlayers(): Observable<Player[][]> | Observable<Player[] | undefined> {
    return this.selectActive(entity => entity.players);
  }

  getPlayer(id: string | undefined): Observable<Player | undefined> {
    return this.getPlayers().pipe(map(list => {
        return list.find(p => '' + p.id === '' + id)
      }
    ));
  }

  getImage(): Observable<string[]> {
    return this.selectEntity(GOLDEN_STATE_NAME).pipe(map(entity => entity?.homeImages || []));
  }
}
