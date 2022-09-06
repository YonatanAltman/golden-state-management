import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TeamRepository} from "@golden-state-management/store/elf";

@Injectable()
export class HomeService {

  constructor(
    private teamRepository:TeamRepository) {
  }

  getImages(): Observable<string[]> {
    return this.teamRepository.getHomeImages$();
  }
}
