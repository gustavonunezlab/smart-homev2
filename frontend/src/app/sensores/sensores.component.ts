import { Component, OnInit } from '@angular/core';
import { DataPackage } from '../models/data-package';
import { ResultsPage } from '../models/results-page';

import { Sensor } from '../models/sensor';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.css'],
})
export class SensoresComponent implements OnInit {
  sensores: Sensor[] = [];

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.getSensores();
  }

  getSensores(): void {
    this.sensorService.getSensores().subscribe((response: any) => {
      response.forEach((element: Sensor) => {
        this.sensores.push(element);
      });
    });
  }
}
