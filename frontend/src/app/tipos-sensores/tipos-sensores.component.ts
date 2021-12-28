import { Component, OnInit } from '@angular/core';
import { TipoSensor } from '../models/tipoSensor';

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalConfirm } from '../modal/modal.component';
import { TipoSensorService } from '../services/tipo-sensor.service';

@Component({
  selector: 'app-tipos-sensores',
  templateUrl: './tipos-sensores.component.html',
  styleUrls: ['./tipos-sensores.component.css']
})
export class TiposSensoresComponent implements OnInit {
  tiposSensores: TipoSensor[] = [];
  alert = true;
  mensaje = '';
  type = '';

  constructor(
    private tipoSensorService: TipoSensorService,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTiposSensores();
  }

  getTiposSensores(): void {
    this.tipoSensorService.getTiposSensores().subscribe((response: any) => {
      response.forEach((element: TipoSensor) => {
        this.tiposSensores.push(element);
      });
    });
  }

  remove(id: number): void {
    const modal = this._modalService.open(NgbdModalConfirm);
    const that = this;
    modal.result.then(
      function () {
        that.tipoSensorService.remove(id).subscribe(_ => {
          that.alert = false;
          that.mensaje = _.StatusText;
          that.type = _.StatusCode == 200 ? "succes" : "danger";
          history.go(0);
          
        });
      },
      function () {}
    );
    modal.componentInstance.title = 'Eliminar tipo sensor';
    modal.componentInstance.message = '¿Esta seguro de eliminar el tipo sensor?';
    modal.componentInstance.description =
      'Si elimina el tipo sensor no lo podrá utilizar luego.';
  }
}
