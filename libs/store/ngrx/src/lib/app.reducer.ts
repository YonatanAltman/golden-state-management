import {createReducer, on} from '@ngrx/store';
import {getTeam, getTeamError, getTeamSuccess} from './app.actions'
import {GOLDEN_STATE_NAME, Team} from "@golden-state-management/api-interfaces";

export const initialState: Partial<Team> = {};
export const teamReducer = createReducer(
  initialState,
  on(getTeam, (state) => onGetTeam(state)),
  on(getTeamSuccess, (state, newState) => onGetTeamSuccess(state, newState.payload)),
  on(getTeamError, (state, error) => {
    console.error(error.payload);
    return {...state};
  }),
);


export function onGetTeam(state: Partial<Team>) {
  return state;
}

export function onGetTeamSuccess(state: Partial<Team>, newState: Team[] | any[]) {
  return newState.find(team => team.name === GOLDEN_STATE_NAME);
}
