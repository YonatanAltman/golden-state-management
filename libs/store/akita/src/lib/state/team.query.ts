import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TeamStore, TeamState } from './team.store';

@Injectable({ providedIn: 'root' })
export class TeamQuery extends QueryEntity<TeamState> {

  constructor(store: TeamStore) {
    super(store);
  }

}
