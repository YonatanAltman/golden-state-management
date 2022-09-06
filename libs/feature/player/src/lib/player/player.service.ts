import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player, Team} from "@golden-state-management/api-interfaces";
import {Store} from "@ngrx/store";
import {TeamService} from "@golden-state-management/store/akita";
import {TeamRepository} from "@golden-state-management/store/elf";
import {AppApiService} from "@golden-state-management/shared/ui-layout";

@Injectable()
export class PlayerService {

  constructor(private appApiService:AppApiService,private store: Store<{ team: Team }>, private teamService: TeamService, private teamRepository: TeamRepository) {
  }

  getPlayer(id: string): Observable<Player | undefined> {
    return this.appApiService.getPlayer(id);
  }
}
