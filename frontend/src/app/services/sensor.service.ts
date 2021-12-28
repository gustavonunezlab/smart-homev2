import { Observable } from 'rxjs';
import { DataPackage } from '../models/data-package';
import { Injectable } from '@angular/core';

import { Sensor } from '../models/sensor';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  constructor(private http: HttpClient) {}

  private sensoresUrl = `${environment.baseUrl}/sensores`; //'http://localhost:3000/sensores';  // URL to web api

  getSensores(): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.sensoresUrl}`);
  }

  get(codigo: string): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.sensoresUrl}/codigo/${codigo}`);
  }

  save(sensor: Sensor): Observable<DataPackage> {
    if (sensor.id != undefined) {
      return this.http.put<DataPackage>(
        `${this.sensoresUrl}/${sensor.id}`,
        sensor
      );
    } else {
      return this.http.post<DataPackage>(`${this.sensoresUrl}`, sensor);
    }
  }
}
