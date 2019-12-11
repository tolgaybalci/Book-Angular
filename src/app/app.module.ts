import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { KitaplarComponent } from './kitaplar/kitaplar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule, DropdownModule} from 'primeng/primeng';
import {AppRoutingModule} from './app-routing.module';
import { OkuyucularComponent } from './okuyucular/okuyucular.component';

@NgModule({
  declarations: [
    AppComponent,
    KitaplarComponent,
    OkuyucularComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
