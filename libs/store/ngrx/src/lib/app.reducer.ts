import {createReducer, on} from '@ngrx/store';
import {getTeam, getTeamSuccess} from './app.actions'
import {Team} from "@golden-state-management/api-interfaces";

export const initialState: Partial<Team> = {};
export const teamReducer = createReducer(
  initialState,
  on(getTeam, (state) => onGetTeam(state)),
  on(getTeamSuccess, (state, newState) => onGetTeamSuccess(state, newState.payload)),
);


export function onGetTeam(state: Partial<Team>) {
  return state;
}

export function onGetTeamSuccess(state: Partial<Team>, newState: Team) {
  console.log('newState',newState);
  return newState;
}
