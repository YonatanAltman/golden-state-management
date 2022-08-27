import {Controller, Get} from '@nestjs/common';
import {mockDb} from "./team.mock";
import {TeamService} from "./team.service";
import * as fs from "fs";

@Controller('team')
export class TeamController {
  db = mockDb();

  constructor(private service: TeamService) {
  }

  @Get()
  getData() {
    console.log('from json');
    try {
      const rawData = fs.readFileSync('libs/controllers/team/src/lib/teams.json');
      const data = JSON.parse(rawData.toString());
      return data.response;
    } catch (error) {
      return {error}
    }
  }

  @Get('league')
  getLeague(): any {
    console.log('from json');
    const rawData = fs.readFileSync('libs/controllers/team/src/lib/league.json');
    const data = JSON.parse(rawData.toString());
    return data.response;

  }

  @Get('players')
  getTeam(): any {
    console.log('from json');
    try {
      const rawData = fs.readFileSync('libs/controllers/team/src/lib/players.json');
      const data = JSON.parse(rawData.toString());
      return data.response.map(player =>{
        player.jersey = player?.leagues?.standard?.jersey || '-';
        return player
      });
    } catch (error) {
      return {error}
    }
  }
}
