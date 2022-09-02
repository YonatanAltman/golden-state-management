import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ENV_CONFIG, SharedUiLayoutModule} from "@golden-state-management/shared/ui-layout";
import {FeatureHomeModule} from "@golden-state-management/feature/home";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from '@ngrx/store';
import {TeamEffects, teamReducer} from '@golden-state-management/store/ngrx';
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUiLayoutModule,
    FeatureHomeModule,
    StoreModule.forRoot({team: teamReducer}),
    EffectsModule.forRoot([TeamEffects])
  ],
  providers: [
    {
      provide: ENV_CONFIG,
      useValue: {environment}
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
