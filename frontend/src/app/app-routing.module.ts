import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SensoresComponent } from './sensores/sensores.component';
import { ElementosComponent } from './elementos/elementos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sensores', component: SensoresComponent },
  { path: 'elementos', component: ElementosComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
