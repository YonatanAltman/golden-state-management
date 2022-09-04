import {EntityStore, StoreConfig} from '@datorama/akita';
import {TeamState} from "./app-state.interface";

@StoreConfig({ name: 'team' })
export class TeamStore extends EntityStore<TeamState> {
  constructor() {
    super({ filter: 'ALL' });
  }
}
