import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Player} from '@golden-state-management/api-interfaces';
import {TeamSubjectStore} from '@golden-state-management/store/subject';


@Injectable()
export class PlayerService {

  constructor(private store:TeamSubjectStore) {
  }

  getPlayer(id: string): Observable<Player | undefined> {
    return this.store.getPlayer$(id)
  }
}
