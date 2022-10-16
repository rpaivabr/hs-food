import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from '@hs-food/api';
import { Bill } from '@hs-food/ui';

@Component({
  selector: 'hsf-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  title = 'Comanda';
  icons = ['menu_book'];
  bill!: Bill;
  ready = false;

  constructor(private router: Router, private route: ActivatedRoute, private store: StoreService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ code }) => {
      if (code) {
        this.store.getData('bills').subscribe((res) => {
          const bills = res as Bill[];
          this.bill = bills.find((b) => b.code === code) || {} as Bill;
          this.ready = true;
        });
      } else {
        this.ready = true;
      }
    });
  }

  goToMenu(): void {
    this.router.navigate(['cardapio']);
  }
}
