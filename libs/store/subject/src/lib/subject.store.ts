import {Injectable} from "@angular/core";
import {ITeamStore, Player, Team} from "@golden-state-management/api-interfaces";
import {map, Observable, ReplaySubject} from "rxjs";
import {AppApiService} from "@golden-state-management/shared/ui-layout";

@Injectable({providedIn: 'root'})
export class TeamSubjectStore implements ITeamStore {
  private _state: Team;
  private _state$ = new ReplaySubject<Team>(1);

  constructor(private appApiService: AppApiService) {
  }

  private getTeamFormServer() {
    return this.appApiService.getTeam().subscribe(team => this.update(team));
  }

  public currentState(): Team {
    return this._state;
  }

  public update(team: Team) {
    this._state = team;
    this._state$.next(team);
  }

  public state$(): Observable<Team> {

    if (!this._state) {
      this.getTeamFormServer();
    }
    return this._state$.asObservable();
  }

  getHomeImages$(): Observable<string[]> {
    return this.state$.pipe(map(team => team.homeImages));
  }

  getPlayer$(id: string): Observable<Player> {
    this.getPlayers$().pipe(map(players => players.find(player => '' + player.id === id)));
  }

  getPlayers$(): Observable<Player[]> {
    return this.state$.pipe(map(team => team.players));
  }

  public resetState(){
    this.update({});
  }

}
