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

  private elementossUrl = `${environment.baseUrl}/elementos`; //'http://localhost:3000/elementos';  // URL to web api

  getElementos(): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.elementossUrl}`);
  }

  get(codigo: string): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.elementossUrl}/codigo/${codigo}`);
  }

  save(elemento: Elemento): Observable<DataPackage> {
    return this.http[elemento.id ? 'put' : 'post']<DataPackage>(
      `${this.elementossUrl}/${elemento.id}`,
      elemento
    );
  }

  search2(text: string): Observable<DataPackage> {
    return this.http.get<DataPackage>(`${this.elementossUrl}/search/${text}`);
  }

 /* El tema es con un satapackage. Cambiar any por DataPackage para retomar*/
  search(searchText: string): Observable<any> {
    console.log(this.http.get<DataPackage>(`${this.elementossUrl}/search/${searchText}`));
    
    
    return this.http.get<DataPackage>(`${this.elementossUrl}/search/${searchText}`).pipe(
       map((res: any) => res),
       catchError(error => throwError(error))
    );
  }
}
