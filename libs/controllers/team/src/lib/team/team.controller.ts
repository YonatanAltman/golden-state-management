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
    const nba = 12;
    this.service.getTeam(nba).subscribe(result => {
      const _data = JSON.stringify(result.data);
      console.log(_data)
      fs.writeFileSync('teams.json', _data);
      console.log('success__');
      return result.data;
    });
  }

  @Get('league')
  getLeague(): any {
    console.log('from json');
    const rawData = fs.readFileSync('league.json');
    const data = JSON.parse(rawData.toString());
    return data.response;

  }

  @Get('players')
  getTeam(): any {
    console.log('from json');
    const rawData = fs.readFileSync('players.json');
    const data = JSON.parse(rawData.toString());
    return data.response;
  }
}
