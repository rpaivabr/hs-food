import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from '@hs-food/api';
import { UiModule } from '@hs-food/ui';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BillComponent } from './pages/bill/bill.component';
import { TablesComponent } from './pages/tables/tables.component';

@NgModule({
  declarations: [AppComponent, TablesComponent, BillComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    UiModule,
    AppRoutingModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
