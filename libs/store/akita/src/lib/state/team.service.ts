import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { TeamStore, TeamState } from './team.store';

@Injectable({ providedIn: 'root' })
export class TeamService extends NgEntityService<TeamState> {

  constructor(store: TeamStore) {
    super(store);
  }

}
