export interface TableColumn<T> {
  class: 'col-1' | 'col-2' | 'col-3' | 'col-4';
  label: string;
  type: keyof T;
}

export interface TableConfig<T = any> {
  title: string;
  columns: TableColumn<T>[];
}
