import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './pages/bill/bill.component';
import { MenuComponent } from './pages/menu/menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/cardapio', pathMatch: 'full' },
  { path: 'cardapio', component: MenuComponent },
  { path: 'comanda/:code', component: BillComponent },
  { path: 'comanda', component: BillComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
