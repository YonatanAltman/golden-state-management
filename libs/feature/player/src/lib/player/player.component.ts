import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable, switchMap, tap} from "rxjs";
import {Player} from "@golden-state-management/api-interfaces";
import {ActivatedRoute} from "@angular/router";
import {PlayerService} from "./player.service";

@Component({
  selector: 'golden-state-management-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PlayerService]
})
export class PlayerComponent {
  player$ = this.getPlayer$();
  firstName = 'Player';

  constructor(private activatedRoute: ActivatedRoute, private service: PlayerService) {
  }

  private getPlayer$(): Observable<Player> {
    return this.activatedRoute.paramMap.pipe(switchMap(
      params =>
        this.service.getPlayer(params.get('id'))
          .pipe(tap(player => {
            this.firstName = player.firstName
          }))))

  }
}
