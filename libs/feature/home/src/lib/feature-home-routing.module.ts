import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: HomeComponent},
  ])],
})
export class FeatureHomeRoutingModule {
}
