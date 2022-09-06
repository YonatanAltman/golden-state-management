import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import {LoaderModule} from "./loader/loader.module";

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule, LoaderModule],
  declarations: [LayoutComponent, SideBarComponent, PageWrapperComponent],
  exports: [LayoutComponent, SideBarComponent,PageWrapperComponent],
})
export class SharedUiLayoutModule {}
