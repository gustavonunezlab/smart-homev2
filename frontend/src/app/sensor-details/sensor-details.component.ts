import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SensorService } from '../services/sensor.service';
import { Sensor } from '../models/sensor';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.css'],
})
export class SensorDetailsComponent implements OnInit {
  sensor!: Sensor;

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService,
    private location: Location
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
        console.log(this.sensor);
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
}
