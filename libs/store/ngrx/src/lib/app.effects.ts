import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EMPTY, exhaustMap} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AppApiService} from "@golden-state-management/shared/ui-layout";
import {getTeamError, getTeam, getTeamSuccess} from "./app.actions";


@Injectable()
export class TeamEffects {

  loadTeam$ = createEffect(() => this.actions$.pipe(
      ofType(getTeam.type),
      exhaustMap(() => this.apiService.getTeam()
        .pipe(
          map(teams => {
              return getTeamSuccess({payload: teams});
            }
          ),
          catchError((err) => [getTeamError({payload:err})])
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: AppApiService
  ) {
  }
}
