import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PlayerComponent} from "./player/player.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: ':id', component: PlayerComponent
    },
  ])],
})
export class FeaturePlayerRoutingModule {
}
