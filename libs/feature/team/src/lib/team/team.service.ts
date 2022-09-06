import {Injectable} from '@angular/core';
import {TeamService as akitaService} from "@golden-state-management/store/akita";

@Injectable()
export class TeamService {

  constructor(private akitaService: akitaService) {
  }

  getTeam() {
    return this.akitaService.getPlayers$()
  }
}
