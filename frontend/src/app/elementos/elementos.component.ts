import { Component, OnInit } from '@angular/core';
import { Elemento } from '../models/elemento';
import { ElementoService } from '../services/elemento.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalConfirm } from '../modal/modal.component';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css'],
})
export class ElementosComponent implements OnInit {
  elementos: Elemento[] = [];
  alert = true;
  mensaje = '';
  type = '';

  constructor(
    private elementoService: ElementoService,
    private _modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getElementos();
  }

  getElementos(): void {
    this.elementoService.getElementos().subscribe((dataPackage) => {
      this.elementos = dataPackage.data as Elemento[];
    });
  }

  remove(id: number): void {
    const modal = this._modalService.open(NgbdModalConfirm);
    const that = this;
    modal.result.then(
      function () {
        that.elementoService.remove(id).subscribe((_) => {
          that.alert = false;
          that.mensaje = _.StatusText;
          that.type = _.StatusCode == 200 ? 'succes' : 'danger';
          history.go(0);
        });
      },
      function () {}
    );
    modal.componentInstance.title = 'Eliminar elemento';
    modal.componentInstance.message = '¿Esta seguro de eliminar el elemento?';
    modal.componentInstance.description =
      'Si elimina el elemento no lo podrá utilizar luego.';
  }
}
