import { Observable } from 'rxjs';
import { DataPackage } from '../models/data-package';
import { Injectable } from '@angular/core';


import { Sensor } from '../models/sensor';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SensorService {
  constructor(private http: HttpClient) {}

  private sensoresUrl = `${environment.baseUrl}/sensores`; //'http://localhost:3000/sensores';  // URL to web api

  getSensores(): Observable<DataPackage> {
 
    return this.http.get<DataPackage>(`${this.sensoresUrl}`);
  }

  byPage(page: number, cant: number): Observable<DataPackage> {
   
    
    return this.http.get<DataPackage>(`${this.sensoresUrl}/detalle?page=${page}&cant=${cant}`);
}


}