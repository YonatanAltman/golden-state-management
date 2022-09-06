import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";
import {TeamService} from "@golden-state-management/store/akita";

@Injectable()
export class PlayerService {

  constructor(private teamService: TeamService) {
  }

  getPlayer(id: string): Observable<Player | undefined> {
    return this.teamService.getPlayer$(id)
  }
}
