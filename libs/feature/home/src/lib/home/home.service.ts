import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TeamService} from "@golden-state-management/store/akita";

@Injectable()
export class HomeService {

  constructor(
    private teamService:TeamService) {
  }

  getImages(): Observable<string[]> {
    return this.teamService.getHomeImages$();
  }
}
