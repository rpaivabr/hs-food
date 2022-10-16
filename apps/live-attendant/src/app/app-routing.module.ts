import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './pages/bill/bill.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TablesComponent } from './pages/tables/tables.component';

const routes: Routes = [
  { path: '', redirectTo: '/mesas', pathMatch: 'full' },
  { path: 'mesas', component: TablesComponent },
  { path: 'comanda/:code', component: BillComponent },
  { path: 'comanda', component: BillComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
