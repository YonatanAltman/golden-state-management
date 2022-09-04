import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, exhaustMap} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppApiService} from "@golden-state-management/shared/ui-layout";


@Injectable()
export class TeamEffects {

  loadTeam$ = createEffect(() => this.actions$.pipe(
      ofType('[Team] Get'),
      exhaustMap(() => this.apiService.getTeam()
        .pipe(
          map(team => {
              console.log('load team', team);
              return {type: '[Team] Get success', payload: team};
            }
          ),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: AppApiService
  ) {
  }
}
