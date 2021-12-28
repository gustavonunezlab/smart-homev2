import { catchError, map, Observable, throwError } from 'rxjs';
import { DataPackage } from '../models/data-package';
import { Injectable } from '@angular/core';

import { TipoSensor } from '../models/tipoSensor';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TipoSensorService {
  constructor(private http: HttpClient) {}

  private tiposSensoresUrl = `${environment.baseUrl}/tipos_sensores`; //'http://localhost:3000/tipos_sensores';  // URL to web api

  getTiposSensores(): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.tiposSensoresUrl}`);
  }

  get(id: number): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.tiposSensoresUrl}/${id}`);
  }

  save(tipoSensor: TipoSensor): Observable<DataPackage> {
    if (tipoSensor.id != undefined) {
      return this.http.put<DataPackage>(
        `${this.tiposSensoresUrl}/${tipoSensor.id}`,
        tipoSensor
      );
    } else {
      return this.http.post<DataPackage>(
        `${this.tiposSensoresUrl}`,
        tipoSensor
      );
    }
  }

  search(searchText: string): Observable<any> {
    return this.http.get<DataPackage>(
      `${this.tiposSensoresUrl}/search/${searchText}`
    );
  }

  remove(id: number): Observable<DataPackage> {
    return this.http['delete']<DataPackage>(`${this.tiposSensoresUrl}/${id}`);
  }
}
