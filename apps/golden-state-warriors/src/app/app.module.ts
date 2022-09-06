import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ENV_CONFIG, SharedUiLayoutModule} from "@golden-state-management/shared/ui-layout";
import {FeatureHomeModule} from "@golden-state-management/feature/home";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUiLayoutModule,
    FeatureHomeModule
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
