import {Player, Team} from "@golden-state-management/api-interfaces";

const PLAYERS:Player[] = [
]
export const DB_MOCK_TEAM: Team = {
  name:'Golden State Warriors',
  couch: {
    firstName: '',
    lastName: '',
    age: 50,
    salary: 2000000
  },
  state: 'California',
  players: [],
  home: 'O'
}


export const mockDb = () => {
  const team = DB_MOCK_TEAM;

  return team;
}
