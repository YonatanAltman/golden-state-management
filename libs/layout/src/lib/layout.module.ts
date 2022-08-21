import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutComponent, SideBarComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
