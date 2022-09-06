import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Team} from "@golden-state-management/api-interfaces";
import {Observable} from "rxjs";
import {TeamQuery, TeamService} from "@golden-state-management/store/akita";

@Injectable()
export class HomeService {

  constructor(private store: Store<{ team: Team }>,private teamService:TeamService) {
  }

  getImages(): Observable<string[]> {
    // return this.store.select(state => state.team.homeImages);
    return this.teamService.getImage();
  }
}
