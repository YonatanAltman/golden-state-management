import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TeamService} from "./team.service";

@Component({
  selector: 'golden-state-management-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [TeamService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  constructor(private service: TeamService) {
  }

  getTeam() {
    this.service.getTeam().subscribe(res => {
      console.log(res);
    })
  }

  getLeague() {
    this.service.getLeague().subscribe(res => {
      console.log(res);
    })
  }

  getPlayers() {
    this.service.getPlayers().subscribe(res => {
      console.log(res);
    })
  }
}
