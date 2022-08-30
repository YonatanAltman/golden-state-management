import {createAction, props} from '@ngrx/store';
import {Team} from "@golden-state-management/api-interfaces";

export const getTeam = createAction('[Team] Get');
export const getTeamSuccess = createAction('[Team] Get success', props<{payload: Team}>());
