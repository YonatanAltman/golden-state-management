import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Player, Team} from "@golden-state-management/api-interfaces";
import {TeamQuery} from "@golden-state-management/store/akita";
import {Observable} from "rxjs";

@Injectable()
export class TeamService {

  constructor(private store: Store<{ team:Team }>,private akitaQuery:TeamQuery) {

  }


  getTeam() {
    return this.store.select((state => state.team?.players))
  }
  getTeamAkita():Observable<Player[]> {
    return this.akitaQuery.getActivePlayers() as unknown as Observable<Player[]>;
  }
}
