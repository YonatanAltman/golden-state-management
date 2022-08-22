import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import {MatButtonModule} from "@angular/material/button";
import {FeatureTeamRoutingModule} from "./feature-team-routing.module";

@NgModule({
  imports: [CommonModule, MatButtonModule,FeatureTeamRoutingModule],
  declarations: [TeamComponent],
})
export class FeatureTeamModule {
  constructor() {
    console.log('team!');
  }
}
