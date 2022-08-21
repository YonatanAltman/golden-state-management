import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FeatureHomeRoutingModule} from "./feature-home-routing.module";

@NgModule({
  imports: [CommonModule, FeatureHomeRoutingModule],
  declarations: [HomeComponent],
})
export class FeatureHomeModule {
  constructor(){
    console.log('home')
  }
}
