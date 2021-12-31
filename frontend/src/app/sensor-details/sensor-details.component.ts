import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SensorService } from '../services/sensor.service';
import { ElementoService } from '../services/elemento.service';
import { TipoSensorService } from '../services/tipo-sensor.service';
import { Sensor } from '../models/sensor';
import { Elemento } from '../models/elemento';
import { TipoSensor } from '../models/tipoSensor';
import { Observable, of, OperatorFunction } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css'],
})
export class SensorDetailsComponent implements OnInit {
  sensor!: Sensor;
  searching = false;
  searchFailed = false;

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService,
    private location: Location,
    private elementoService: ElementoService,
    private tipoSensorService: TipoSensorService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');

    if (codigo === 'new') {
      this.sensor = <Sensor>{};
    } else {
      this.sensorService.get(codigo!).subscribe((response: any) => {
        this.sensor = <Sensor>response;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.sensorService.save(this.sensor).subscribe((dataPackage) => {
      this.sensor = <Sensor>dataPackage.data;
      this.goBack();
    });
  }

  searchElemento = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    tap(() => (this.searching = true)),
    switchMap((term) =>
      this.elementoService
        .search(term)
        .pipe(map((response) => response.data))
        .pipe(
          tap(() => (this.searchFailed = false)),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })
        )
    ),
    tap(() => (this.searching = false))
  );

  searchTipoSensor = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => (this.searching = true)),
      switchMap((term) =>
        this.tipoSensorService
          .search(term)
          .pipe(map((response) => response.data))
          .pipe(
            tap(() => (this.searchFailed = false)),
            catchError(() => {
              this.searchFailed = true;
              return of([]);
            })
          )
      ),
      tap(() => (this.searching = false))
    );

  resultElementoFormat(value: any): string {
    return value.elemento;
  }

  inputElementoFormat(value: any): string {
    if (value) {
      return value.elemento;
    }
    return null!;
  }

  resultTipoSensorFormat(value: any): string {
    return value.tipo_sensor;
  }

  inputTipoSensorFormat(value: any): string {
    if (value) {
      return value.tipo_sensor;
    }
    return null!;
  }
}
