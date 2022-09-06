import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {Team} from "@golden-state-management/api-interfaces";
import {TeamService as akitaService} from "@golden-state-management/store/akita";
import {TeamRepository} from "@golden-state-management/store/elf";

@Injectable()
export class TeamService {

  constructor(private store: Store<{ team: Team }>, private akitaService: akitaService, private teamRepository: TeamRepository) {
  }

  getTeam() {
    return this.akitaService.getPlayers$()
  }
}
