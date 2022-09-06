import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player, Team} from "@golden-state-management/api-interfaces";
import {Store} from "@ngrx/store";
import {TeamService} from "@golden-state-management/store/akita";

@Injectable()
export class PlayerService {

  constructor(private store: Store<{ team: Team }>,private teamService:TeamService) {
  }

  getPlayer(id: string): Observable<Player | undefined> {
    // return this.store.select(state => state.team?.players?.find(p => '' + p.id === '' + id))
    return this.teamService.getPlayer(id);
  }
}
