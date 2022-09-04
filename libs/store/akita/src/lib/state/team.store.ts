import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import {Team} from "@golden-state-management/api-interfaces";

export interface TeamState extends EntityState<Team> {
  filter?: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'team' })
export class TeamStore extends EntityStore<TeamState> {

  constructor() {
    super();
  }

}
