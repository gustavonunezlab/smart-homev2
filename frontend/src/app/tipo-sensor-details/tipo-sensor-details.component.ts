import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipoSensor } from '../models/tipoSensor';
import { TipoSensorService } from '../services/tipo-sensor.service';


@Component({
  selector: 'app-tipo-sensor-details',
  templateUrl: './tipo-sensor-details.component.html',
  styleUrls: ['./tipo-sensor-details.component.css']
})
export class TipoSensorDetailsComponent implements OnInit {
  tipoSensor!: TipoSensor;

  constructor(
    private route: ActivatedRoute,
    private tipoSensorService: TipoSensorService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id === 'new') {
      this.tipoSensor = <TipoSensor>{};
    } else {
      this.tipoSensorService.get(+id!).subscribe((response: any) => {
        this.tipoSensor = <TipoSensor>response;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.tipoSensorService.save(this.tipoSensor).subscribe((dataPackage) => {
      this.tipoSensor = <TipoSensor>dataPackage.data;
      this.goBack();
    });
  }

}
