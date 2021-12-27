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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElementosComponent,
    SensoresComponent,
    SensorDetailsComponent,
    ElementoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbTypeaheadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
