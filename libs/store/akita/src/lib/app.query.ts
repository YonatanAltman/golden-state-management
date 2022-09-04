import { QueryEntity } from '@datorama/akita';
import {TeamState, TeamStore} from "./app.store";

export class TeamQuery extends QueryEntity<TeamState> {
  constructor(store: TeamStore) {
    super(store);
  }
}
