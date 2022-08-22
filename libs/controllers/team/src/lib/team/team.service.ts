import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {Observable} from "rxjs";

const headers = {
  'X-RapidAPI-Key': '5c86a9008fmsh5d96dc01c7f1993p1636c8jsn70ba295ffb36',
  'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
};

@Injectable()
export class TeamService {
  constructor(private readonly httpService: HttpService) {
  }

  getAllLeagues(): Observable<any> {
    return this.httpService.get('https://api-basketball.p.rapidapi.com/leagues', {
      headers
    });
  }

  getTeam(league:number): Observable<any> {
    return this.httpService.get('https://api-basketball.p.rapidapi.com/teams', {
      headers,
      params: {league, season: '2020-2021'}
    });
  }
  getPlayer(): Observable<any> {

    return this.httpService.get('https://api-nba-v1.p.rapidapi.com/players', {
      headers,
      params: {team: '11', season: '2021'},
    });
  }
}
