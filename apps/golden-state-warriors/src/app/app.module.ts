import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import {LayoutModule} from "@golden-state-management/layout";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, HttpClientModule, LayoutModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
