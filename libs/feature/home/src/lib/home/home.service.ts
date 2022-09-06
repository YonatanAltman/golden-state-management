import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Team} from "@golden-state-management/api-interfaces";
import {Observable} from "rxjs";

@Injectable()
export class HomeService {

  constructor(private store: Store<{ team: Team }>) {
  }

  getImages(): Observable<string[]> {
    return this.store.select(state => state.team.homeImages);
  }
}
