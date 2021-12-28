import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SensoresComponent } from './sensores/sensores.component';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { ElementosComponent } from './elementos/elementos.component';
import { ElementoDetailsComponent } from './elemento-details/elemento-details.component'; 
import { TiposSensoresComponent } from './tipos-sensores/tipos-sensores.component';
import { TipoSensorDetailsComponent } from './tipo-sensor-details/tipo-sensor-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sensores', component: SensoresComponent },
  { path: 'sensores/:codigo', component: SensorDetailsComponent },

  { path: 'elementos', component: ElementosComponent },
  { path: 'elementos/:codigo', component: ElementoDetailsComponent },

  { path: 'tipos_sensores', component: TiposSensoresComponent },
  { path: 'tipos_sensores/:id', component: TipoSensorDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
