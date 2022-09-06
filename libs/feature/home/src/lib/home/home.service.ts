import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TeamSubjectStore} from '@golden-state-management/store/subject';

@Injectable()
export class HomeService {
  constructor(private store: TeamSubjectStore) {
  }

  getImages(): Observable<string[]> {
    return this.store.getHomeImages$();
  }
}
