import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FeatureHomeRoutingModule} from "./feature-home-routing.module";
import {SharedUiLayoutModule} from "@golden-state-management/shared/ui-layout";

@NgModule({
    imports: [CommonModule, FeatureHomeRoutingModule, SharedUiLayoutModule],
  declarations: [HomeComponent],
})
export class FeatureHomeModule {
  constructor(){
    console.log('home')
  }
}
