import { Component, OnInit } from '@angular/core';
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
      this.sensores.sort((a, b) =>
        a.sensor.toLocaleLowerCase() > b.sensor.toLocaleLowerCase()
          ? 1
          : b.sensor.toLocaleLowerCase() > a.sensor.toLocaleLowerCase()
          ? -1
          : 0
      ); console.log(this.sensores);
      
    });
  }
}
