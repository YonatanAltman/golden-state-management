import {Injectable} from '@angular/core';
import {Player} from "@golden-state-management/api-interfaces";
import {AppApiService} from "@golden-state-management/shared/ui-layout";
import {Observable, shareReplay} from "rxjs";

@Injectable()
export class TeamService {

  constructor(private appApiService: AppApiService) {

  }


  getTeam(): Observable<Player[]> {
    return this.appApiService.getPlayers().pipe(shareReplay(1))
  }
}
