import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Elemento } from '../models/elemento';
import { ElementoService } from '../services/elemento.service';

@Component({
  selector: 'app-elemento-details',
  templateUrl: './elemento-details.component.html',
  styleUrls: ['./elemento-details.component.css'],
})
export class ElementoDetailsComponent implements OnInit {
  elemento!: Elemento;

  constructor(
    private route: ActivatedRoute,
    private elementoService: ElementoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');

    if (codigo === 'new') {
      this.elemento = <Elemento>{};
    } else {
      this.elementoService.get(codigo!).subscribe((dataPackage) => {
        this.elemento = dataPackage.data as Elemento;
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.elementoService.save(this.elemento).subscribe((dataPackage) => {
      this.elemento = <Elemento>dataPackage.data;
      this.goBack();
    });
  }
}
