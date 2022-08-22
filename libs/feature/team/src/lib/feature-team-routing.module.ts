import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {TeamComponent} from "./team/team.component";


@NgModule({
  imports: [RouterModule.forChild([{
    path: '', component: TeamComponent
  }])],
})
export class FeatureTeamRoutingModule {
}
