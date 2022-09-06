import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Player, Team} from "@golden-state-management/api-interfaces";
import {TeamQuery} from "@golden-state-management/store/akita";
import {TeamRepository} from "@golden-state-management/store/elf";
import {AppApiService} from "@golden-state-management/shared/ui-layout";
import {Observable, shareReplay} from "rxjs";

@Injectable()
export class TeamService {

  constructor(private appApiService: AppApiService, private store: Store<{ team: Team }>, private akitaQuery: TeamQuery, private teamRepository: TeamRepository) {

  }


  getTeam(): Observable<Player[]> {
    return this.appApiService.getPlayers().pipe(shareReplay(1))
  }
}
