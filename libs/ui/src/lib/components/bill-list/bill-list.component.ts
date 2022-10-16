import { Component, Input } from '@angular/core';
import { Bill, BillItem } from '../../types';

@Component({
  selector: 'hsf-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css'],
})
export class BillListComponent {
  @Input() bill: Bill = {} as Bill;

  get itemsSortedByNameAsc(): BillItem[] {
    if (!this.bill?.items) return [];

    const items = [...this.bill.items];
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }

  get total(): number {
    if (!this.bill?.items) return 0;

    return this.bill.items.reduce((a, i) => a + i.price, 0)
  }
  // itemsPerCategory: [string, Item[]][] = [];

  // ngOnChanges(): void {
  //   const items = {} as { [category: string]: Item[] };
  //   this.items
  //     .sort((a, b) => a.name.localeCompare(b.name))
  //     .forEach(item => {
  //     const categoryItems = items[item.category] || []
  //     items[item.category] = [...categoryItems, item];
  //   })
  //   this.itemsPerCategory = Object.entries(items);
  // }
}
