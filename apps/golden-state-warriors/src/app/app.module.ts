import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ENV_CONFIG, SharedUiLayoutModule} from "@golden-state-management/shared/ui-layout";
import {AppRoutingModule} from "./app-routing.module";
import {environment} from "../environments/environment";
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {NG_ENTITY_SERVICE_CONFIG} from "@datorama/akita-ng-entity-service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedUiLayoutModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [
    {
      provide: ENV_CONFIG,
      useValue: {environment}
    },
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: environment.baseUrl
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
