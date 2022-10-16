import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService, StoreService } from '@hs-food/api';
import { Bill } from '@hs-food/ui';

@Component({
  selector: 'hsf-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  title = 'Atendimento';
  icons = ['logout'];
  bills: Bill[] = [];

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
    this.store.getData('bills').subscribe((res) => {
      this.bills = res as Bill[];
    });
  }

  logout(): void {
    console.log('logout');
  }

  goToTable({ code, table }: { code: string, table: number }): void {
    const bill = this.bills.find(b => b.code === code);
    if (bill) {
      this.store.updateData('bills', { ...bill, notify: false }).subscribe();
    }
    localStorage.setItem('hsfood_table', String(table));
    this.router.navigate(['comanda', code]);
  }

}
