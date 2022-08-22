import { Module } from '@nestjs/common';
import { TeamController } from './team/team.controller';
import { HttpModule } from '@nestjs/axios';
import { TeamService } from './team/team.service';

@Module({
  controllers: [TeamController],
  providers: [TeamService],
  imports: [HttpModule],
  exports: [],
})
export class ControllerTeamModule {}
