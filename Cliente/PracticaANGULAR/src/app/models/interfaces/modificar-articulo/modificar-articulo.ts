import { Component } from '@angular/core';
import { Articulo } from '../../articulo';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServicioArticulo } from '../../../services/servicio-articulo';


@Component({
  selector: 'app-modificar-articulo',
  imports: [
    RouterLink
  ],
  templateUrl: './modificar-articulo.html',
  styleUrl: './modificar-articulo.css',
})
export class ModificarArticulo {
  articulo!: Articulo

  constructor(
    private miRutaAtiva: ActivatedRoute,
    private miservicioArticulo: ServicioArticulo
  ) {}

  ngOnInit() {
    this.miRutaAtiva
      .params
      .subscribe(params => this.articulo = this.miservicioArticulo.getArticulo(params['id'])!);
  }
}
