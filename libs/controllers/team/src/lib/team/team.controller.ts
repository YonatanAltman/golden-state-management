import {Controller, Get, Param} from '@nestjs/common';
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
    const rawData = fs.readFileSync('libs/controllers/team/src/lib/league.json');
    const data = JSON.parse(rawData.toString());
    return data.response;

  }

  @Get('players')
  getTeam(): any {
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
  @Get('player/:id')
  getPlayer(@Param('id') id:string): any {
    try {
      const rawData = fs.readFileSync('libs/controllers/team/src/lib/players.json');
      const data = JSON.parse(rawData.toString());
      return data.response.find(player => ''+player?.id === ''+id);
    } catch (error) {
      return {error}
    }
  }
}
