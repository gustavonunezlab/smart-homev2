import { catchError, map, Observable, throwError } from 'rxjs';
import { DataPackage } from '../models/data-package';
import { Injectable } from '@angular/core';

import { Elemento } from '../models/elemento';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ElementoService {
  constructor(private http: HttpClient) {}

  private elementosUrl = `${environment.baseUrl}/elementos`; //'http://localhost:3000/elementos';  // URL to web api

  getElementos(): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.elementosUrl}`);
  }

  get(codigo: string): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.elementosUrl}/codigo/${codigo}`);
  }

  save(elemento: Elemento): Observable<DataPackage> {
    if (elemento.id != undefined) {
      return this.http.put<DataPackage>(
        `${this.elementosUrl}/${elemento.id}`,
        elemento
      );
    } else {
      return this.http.post<DataPackage>(`${this.elementosUrl}`, elemento);
    }
  }

  search(searchText: string): Observable<any> {
    return this.http.get<DataPackage>(
      `${this.elementosUrl}/search/${searchText}`
    );
  }

  remove(id: number): Observable<DataPackage> {
    return this.http['delete']<DataPackage>(`${this.elementosUrl}/${id}`);
}

}
