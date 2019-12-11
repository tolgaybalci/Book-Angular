import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {OkuyucularComponent} from './okuyucular/okuyucular.component';
import {KitaplarComponent} from './kitaplar/kitaplar.component';


const routes: Routes = [
  {
    path: '',
    component: KitaplarComponent,
  },
  {
    path: 'okuyucular',
    component: OkuyucularComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
