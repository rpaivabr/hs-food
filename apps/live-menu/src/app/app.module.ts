import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '@hs-food/ui';
import { ApiModule } from '@hs-food/api';

import { AppComponent } from './app.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { DialogComponent } from './components/dialog/dialog.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { BillComponent } from './pages/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    MenuComponent,
    BillComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UiModule,
    ApiModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 5000 } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
