import { Component, OnInit } from '@angular/core';
import { Elemento } from '../models/elemento';
import { ElementoService } from '../services/elemento.service';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {
  elementos: Elemento[] = [];

  constructor(private elementoService: ElementoService) { }

  ngOnInit(): void {
    this.getElementos();
  }

  getElementos(): void {
    this.elementoService.getElementos().subscribe((response: any) => {
      response.forEach((element: Elemento) => {
        this.elementos.push(element);
      });
    });
  }

}
