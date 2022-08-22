import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) {

  }

  getTeam() {
    return this.http.get('http://localhost:3333/api/team');
  }
  getLeague() {
    return this.http.get('http://localhost:3333/api/team/league');
  }
  getPlayers() {
    return this.http.get('http://localhost:3333/api/team/players');
  }
}
