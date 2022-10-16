import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService, StoreService } from '@hs-food/api';
import { Bill, Item } from '@hs-food/ui';
import { DialogComponent } from '../../components/dialog/dialog.component';

@Component({
  selector: 'hsf-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title = 'Menu';
  icons = ['receipt_long'];
  items: Item[] = [];
  code!: string | null;
  isCodeValid = false;
  bills: Bill[] = [];
  bill?: Bill;
  notify = false;
  lastItems = 0;

  // users$ = this.api.getUsers();
  // login$ = this.auth.login({
  //   email: 'r.paivabr@gmail.com',
  //   password: 'changeme',
  // });

  constructor(
    public dialog: MatDialog,
    // private api: ApiService,
    private auth: AuthService,
    private store: StoreService,
    private router: Router,
  ) // private snackbar: MatSnackBar
  {
    // this.auth
    //   .login({
    //     email: 'administrador@hsfood.com.br',
    //     password: 'hsfoodadministrador',
    //   } as AuthRequest)
    //   .subscribe((res) => {
    //     this.store
    //       .getCurrentUser(res.accessToken)
    //       .subscribe((data) => console.log(data));
    //   });
  }

  ngOnInit(): void {
    this.code = localStorage.getItem('hsfood_billcode');

    this.store.getData('bills').subscribe((res) => {
      this.bills = res as Bill[];
      this.verifyCode();
    });

    this.store.getData('items').subscribe((res) => (this.items = res as Item[]));
  }

  iconClick(icon: string): void {
    switch (icon) {
      case 'room_service':
        this.callAttendant();
        break;
      case 'receipt_long':
        this.openBill();
        break;
    }

  }

  private callAttendant(): void {
    if (this.isCodeValid) {
      this.store.updateData('bills', { ...this.bill, notify: true }).subscribe();
    }
  }

  private openBill(): void {
    if (this.isCodeValid) {
      this.router.navigate(['comanda', this.code]);
      return;
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
        this.code = result;
        localStorage.setItem('hsfood_billcode', this.code);
        this.verifyCode();
        if (this.isCodeValid) {
          this.router.navigate(['comanda', this.code]);
          return;
        }
      }
    });
  }

  private verifyCode(): void {
    if (this.code) {
      this.bill = this.bills.find((b) => b.code === this.code && b.status);
      this.isCodeValid = Boolean(this.bill);
      if (this.isCodeValid) {
        const items = this.bill?.items.length || 0;
        this.notify = Boolean(this.lastItems) && this.lastItems !== items;
        this.lastItems = items;
        if (this.icons.length === 1) {
          this.icons.unshift('room_service');
        }
      } else {
        localStorage.removeItem('hsfood_billcode');
      }
    }
  }
}
