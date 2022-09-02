import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player, Team} from "@golden-state-management/api-interfaces";
import {Store} from "@ngrx/store";

@Injectable()
export class PlayerService {

  constructor(private store: Store<{ team: Team }>) {
  }

  getPlayer(id: string | null): Observable<Player | undefined> {
    return this.store.select(state => state.team?.players?.find(p => '' + p.id === '' + id))
  }
}
