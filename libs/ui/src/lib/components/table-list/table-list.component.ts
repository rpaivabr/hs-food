import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Bill } from '../../types';

@Component({
  selector: 'hsf-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnChanges {
  @Input() bills: Bill[] = [];
  @Output() whenClick = new EventEmitter<{ code: string, table: number }>();
  tables: number[] = [1, 2];
  billsPerTable: [number, Bill][] = [];

  ngOnChanges(): void {
    this.billsPerTable = this.tables.map((t) => [
      t,
      this.bills.find((b) => b.table === t && b.status) || ({} as Bill),
    ]);
  }

  handleClick({ code, table }: { code: string, table: number }) {
    this.whenClick.emit({ code, table });
  }
}
