import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ControllerTeamModule} from '@golden-state-management/controllers/team';

@Module({
  imports: [ControllerTeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
