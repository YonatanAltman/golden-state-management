import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {TableConfig} from "./table.model";

@Component({
  selector: 'golden-state-management-table[config][data]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() config!: TableConfig;
  @Input() data!: any[] | null;
  @Output() rowClick = new EventEmitter<any>();
  @Output() rowDbClick = new EventEmitter<any>();

  onRowClick(row: any) {
    this.rowClick.emit(row);
  }

  onRowDbClick(row: any) {
    this.rowDbClick.emit(row);
  }
}
