import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) {
  }

  getPlayer(id: string|null): Observable<Player> {
    return this.http.get<Player>('http://localhost:3333/api/team/player/'+id);
  }
}
