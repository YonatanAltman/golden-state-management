import {Injectable} from '@angular/core';
import {TeamSubjectStore} from '@golden-state-management/store/subject';

@Injectable()
export class TeamService {

  constructor(private store:TeamSubjectStore) {
  }


  getTeam() {
    return this.store.getPlayers$()
  }
}
