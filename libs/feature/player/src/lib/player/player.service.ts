import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";
import {AppApiService} from "@golden-state-management/shared/ui-layout";

@Injectable()
export class PlayerService {

  constructor(private appApiService:AppApiService) {
  }

  getPlayer(id: string): Observable<Player | undefined> {
    return this.appApiService.getPlayer(id);
  }
}
