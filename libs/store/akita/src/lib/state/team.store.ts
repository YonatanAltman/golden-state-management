import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig,ActiveState} from '@datorama/akita';
import {Team} from "@golden-state-management/api-interfaces";

export interface TeamState extends EntityState<Team> ,ActiveState {
  filter?: string;
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'team', idKey: 'name'})
export class TeamStore extends EntityStore<TeamState> {

}
