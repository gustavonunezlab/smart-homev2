import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElementosComponent } from './elementos/elementos.component';
import { SensoresComponent } from './sensores/sensores.component';
import { HttpClientModule } from '@angular/common/http';
import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementoDetailsComponent } from './elemento-details/elemento-details.component';
import { TiposSensoresComponent } from './tipos-sensores/tipos-sensores.component';
import { TipoSensorDetailsComponent } from './tipo-sensor-details/tipo-sensor-details.component';
import { NgbdModalConfirm } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElementosComponent,
    SensoresComponent,
    SensorDetailsComponent,
    ElementoDetailsComponent,
    TiposSensoresComponent,
    TipoSensorDetailsComponent,
    NgbdModalConfirm,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbTypeaheadModule,
  ],
  entryComponents: [
    NgbdModalConfirm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
