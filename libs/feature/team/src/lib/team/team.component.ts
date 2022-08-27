import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TeamService} from "./team.service";
import {combineLatest, map, ReplaySubject, startWith} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";
import {TableConfig} from "@golden-state-management/shared/ui-layout";

@Component({
  selector: 'golden-state-management-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  public title = 'Team';
  public filter$ = new ReplaySubject<string>(1);
  players$ = combineLatest([
    this.service.getPlayers(),
    this.filter$.pipe(startWith(''))
  ]).pipe(map(([list, str]: [Player[], string]) => {
    console.log('list', list)
    return list?.filter(p => !str || p.firstName.includes(str) || p.lastName.includes(str));
  }));
  config: TableConfig<Player> = {
    title: 'Players List',
    columns: [
      {label: '#', type: 'jersey', class: 'col-1'},
      {label: 'First Name', type: 'firstName', class: 'col-2'},
      {label: 'Last Name', type: 'lastName', class: 'col-2'},
      {label: 'Age', type: 'age', class: 'col-1'},
      {label: 'College', type: 'college', class: 'col-4'},
    ]
  };

  constructor(private service: TeamService) {
  }

  setRow($event: any) {
    console.log($event)
  }
}
