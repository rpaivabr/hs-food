import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from '@hs-food/ui';
import { AuthModule } from '@hs-food/auth';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
