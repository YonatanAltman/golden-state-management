import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENV_CONFIG, EnvironmentConfig} from "@golden-state-management/shared/ui-layout";
import {delay, map, Observable} from "rxjs";
import {GOLDEN_STATE_NAME, Team} from "@golden-state-management/api-interfaces";

@Injectable({
  providedIn: 'root'
})
export class AppApiService {
  readonly baseUrl: string;

  constructor(@Inject(ENV_CONFIG) private config: EnvironmentConfig, private http: HttpClient) {
    this.baseUrl = this.config.environment.baseUrl;
  }

  getTeam(): Observable<Team|undefined> {
    return this.http.get<Team[]>(this.baseUrl + '/team').pipe(map(teams => teams.find(team => team.name === GOLDEN_STATE_NAME)));
  }
}
