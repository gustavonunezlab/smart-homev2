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
  
  resultsPage: ResultsPage = <ResultsPage>{};
  pages: number[] = [];
  currentPage: number = 1;

  constructor(private sensorService: SensorService) {}

  ngOnInit(): void {
    this.getSensores();
  }

  getSensores(): void {
    this.sensorService.getSensores().subscribe((sensor) => {
      console.log(sensor);

      this.sensores = sensor.slice();

      console.log(this.sensores);
      


    });

    //ver aca esta mierda
  }
}
