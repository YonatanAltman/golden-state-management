import {EntityState} from "@datorama/akita";
import {Player} from "@golden-state-management/api-interfaces";

export interface TeamState extends EntityState<Player, number> {
  filter?: string;
}
