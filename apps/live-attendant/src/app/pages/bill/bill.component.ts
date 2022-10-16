import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '@hs-food/api';
import { Bill, Item } from '@hs-food/ui';

@Component({
  selector: 'hsf-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  title = 'Comanda';
  icons = ['table_restaurant'];
  itemControl = new FormControl('', Validators.required);
  bills: Bill[] = [];
  bill!: Bill;
  items: Item[] = [];
  itemsPerCategory: [string, Item[]][] = [];
  ready = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ code }) => {
      if (code) {
        this.store.getData('bills').subscribe((res) => {
          this.bills = res as Bill[];
          this.bill = this.bills.find((b) => b.code === code) || ({} as Bill);
          this.ready = true;
        });
      } else {
        this.ready = true;
      }
    });

    this.store.getData('items').subscribe((res) => {
      this.items = res as Item[];

      const items = {} as { [category: string]: Item[] };
      this.items
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((item) => {
          const categoryItems = items[item.category] || [];
          items[item.category] = [...categoryItems, item];
        });
      this.itemsPerCategory = Object.entries(items);
    });
  }

  includeItem(): void {
    const id = this.itemControl.value;
    const item = this.items.find((i) => i.id === id);
    if (item) {
      const { name, price } = item;
      this.bill = {
        ...this.bill,
        items: [...this.bill.items, { name, price }],
      };
      this.store.updateData('bills', this.bill).subscribe(() => {
        this.itemControl.setValue('');
      });
    }
  }

  openBill(): void {
    const table = localStorage.getItem('hsfood_table');
    const code = this.newCode();
    this.store
      .saveData('bills', {
        code,
        table: Number(table),
        status: true,
        notify: false,
        items: [],
      })
      .subscribe(() => {
        this.router.navigate(['comanda', code]);
      });
  }

  closeBill(): void {
    this.store.updateData('bills', { ...this.bill, status: false }).subscribe();
    this.goToMenu();
  }

  goToMenu(): void {
    this.router.navigate(['mesas']);
  }

  private newCode(): string {
    return Math.random().toString(36).substr(2, 6);
  }
}
