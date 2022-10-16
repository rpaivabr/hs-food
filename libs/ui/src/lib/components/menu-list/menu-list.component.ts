import { Component, Input, OnChanges } from '@angular/core';
import { Item } from '../../types';

@Component({
  selector: 'hsf-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnChanges {
  @Input() items: Item[] = [];
  itemsPerCategory: [string, Item[]][] = [];

  ngOnChanges(): void {
    const items = {} as { [category: string]: Item[] };
    this.items
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(item => {
      const categoryItems = items[item.category] || []
      items[item.category] = [...categoryItems, item];
    })
    this.itemsPerCategory = Object.entries(items);
  }
}
