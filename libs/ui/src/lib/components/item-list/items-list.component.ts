import { Component, Input, OnChanges } from '@angular/core';
import { Item } from '../../types';

@Component({
  selector: 'hsf-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnChanges {
  @Input() items: Item[] = [];
  itemsPerCategory: [string, Item[]][] = [];

  ngOnChanges(): void {
    const items = {} as { [category: string]: Item[] };
    this.items.forEach(item => {
      const categoryItems = items[item.category] || []
      items[item.category] = [...categoryItems, item];
    })
    this.itemsPerCategory = Object.entries(items);
  }
}
