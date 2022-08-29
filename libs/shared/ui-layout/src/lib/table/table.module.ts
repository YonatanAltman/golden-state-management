import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
    imports: [CommonModule, MatButtonModule],
})
export class TableModule {}
