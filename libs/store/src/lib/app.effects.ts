import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, mergeMap} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppApiService} from "./app-api.service";


@Injectable()
export class TeamEffects {

  loadTeam$ = createEffect(() => this.actions$.pipe(
      ofType('[Team] Get'),
      mergeMap(() => this.apiService.getTeam()
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
