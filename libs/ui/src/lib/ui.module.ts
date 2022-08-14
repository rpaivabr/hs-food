import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { ItemsListComponent } from './components/item-list/items-list.component';

const IMPORTS = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
];
const DECLARATIONS = [HeaderComponent, ItemsListComponent];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...IMPORTS],
  exports: [...DECLARATIONS, ...IMPORTS],
})
export class UiModule {}
