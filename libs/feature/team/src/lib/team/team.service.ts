import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Team} from "@golden-state-management/api-interfaces";

@Injectable()
export class TeamService {

  constructor(private store: Store<{ team:Team }>) {

  }


  getTeam() {
    return this.store.select((state => state.team?.players))
  }
}
