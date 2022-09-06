import {Controller, Get, Param} from '@nestjs/common';
import {mockDb} from "./team.mock";
import * as fs from "fs";
import {Team} from "@golden-state-management/api-interfaces";
const KE_2_SHNIOT = 1991;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Controller('team')
export class TeamController {
  db = mockDb();

  @Get()
  async getData() {
    const team: Partial<Team> = {
      name: 'Golden State',
      coach: {
        id: 20202,
        firstName: 'Steve',
        lastName: 'Kerr',
        image: 'https://basketballforever.com/wp-content/uploads/2022/08/sk.jpg',
        age: 57,
        salary: 1000000
      },
      homeImages: [
        'https://cdn.nba.com/manage/2020/10/chase-center-exterior-784x441.jpg',
        'https://cdn.nba.com/manage/2020/10/chase-center-baseline-1-784x523.jpg',
      ]
    }
    try {
      const rawData = fs.readFileSync('libs/controllers/team/src/lib/players.json');
      const data = JSON.parse(rawData.toString());
      team.players = data.response.map(player => {
        player.jersey = player?.leagues?.standard?.jersey || '-';
        return player
      });
      console.log('sleep')
      await sleep(KE_2_SHNIOT);
      console.log('awake')
      console.log('------------')
      return [team];
    } catch (error) {
      return {error}
    }
  }

  @Get('league')
  getLeague(): any {
    const rawData = fs.readFileSync('libs/controllers/team/src/lib/league.json');
    const data = JSON.parse(rawData.toString());
    return data.response;

  }

  @Get('players')
  getTeam(): any {
    try {
      const rawData = fs.readFileSync('libs/controllers/team/src/lib/players.json');
      const data = JSON.parse(rawData.toString());
      return data.response.map(player => {
        player.jersey = player?.leagues?.standard?.jersey || '-';
        return player
      });
    } catch (error) {
      return {error}
    }
  }

  @Get('player/:id')
  getPlayer(@Param('id') id: string): any {
    try {
      const rawData = fs.readFileSync('libs/controllers/team/src/lib/players.json');
      const data = JSON.parse(rawData.toString());
      return data.response.find(player => '' + player?.id === '' + id);
    } catch (error) {
      return {error}
    }
  }
}
