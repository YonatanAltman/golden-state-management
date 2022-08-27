import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) {

  }

  getTeam(): Observable<Player[]> {
    return this.http.get<Player[]>('http://localhost:3333/api/team');
  }

  getLeague() {
    return this.http.get('http://localhost:3333/api/team/league');
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('http://localhost:3333/api/team/players').pipe(delay(2000));
  }
}
