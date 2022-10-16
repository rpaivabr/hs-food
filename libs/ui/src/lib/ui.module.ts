import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { BillListComponent } from './components/bill-list/bill-list.component';
import { TableListComponent } from './components/table-list/table-list.component';

const IMPORTS = [
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
];
const DECLARATIONS = [
  HeaderComponent,
  MenuListComponent,
  BillListComponent,
  TableListComponent,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...IMPORTS],
  exports: [...DECLARATIONS, ...IMPORTS],
})
export class UiModule {}
