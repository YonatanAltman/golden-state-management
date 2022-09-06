import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Team} from "@golden-state-management/api-interfaces";
import {Observable} from "rxjs";
import {TeamQuery, TeamService} from "@golden-state-management/store/akita";
import {TeamRepository} from "@golden-state-management/store/elf";

@Injectable()
export class HomeService {

  constructor(
    private store: Store<{ team: Team }>,
    private teamService:TeamService,
    private teamRepository:TeamRepository) {
  }

  getImages(): Observable<string[]> {
    return this.teamRepository.getHomeImages$();
  }
}
