import {Injectable} from "@angular/core";
import {createStore, select, withProps} from '@ngneat/elf';
import {Team, ITeamStore, Player} from "@golden-state-management/api-interfaces";
import {AppApiService} from "@golden-state-management/shared/ui-layout";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface TeamProps {
  team: Team | null;
}

@Injectable({providedIn: 'root'})
export class TeamRepository implements ITeamStore {
  readonly store = TeamRepository.generateStore();
  team$ = this.store.pipe(select(state => {
    return state.team;
  }))

  constructor(private apiService: AppApiService) {
  }

  private static generateStore() {
    return createStore(
      {name: 'teams'}, withProps<TeamProps>({team: null}));
  }

  public init() {
    console.log('init');
    this.apiService.getTeam().subscribe(team => this.update(team))
  }

  public update(team: TeamProps['team'] | undefined) {
    if (team) {
      this.store.update(state => ({
        ...state,
        team
      }));
    }
    console.log('lef update', this.store.state);
  }

  getHomeImages$(): Observable<string[]> {
    return this.store.pipe(select(state => state.team?.homeImages || []));
  }

  getPlayer$(id: string): Observable<Player> {
    return this.store.pipe(select(state => state.team?.players.find(player => ''+player.id === ''+id) as Player));
  }

  getPlayers$(): Observable<Player[]> {
    return this.store.pipe(select(state => state.team?.players||[]));
  }

}
