import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Articulo } from '../../articulo';
import { ServicioArticulo } from '../../../services/servicio-articulo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-borrar-articulo',
  imports: [
    RouterLink
  ],
  templateUrl: './borrar-articulo.html',
  styleUrl: './borrar-articulo.css',
})
export class BorrarArticulo {
  articulo!: Articulo

  constructor(
    private servicioArticulo: ServicioArticulo,
    private miRutaAtiva: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.miRutaAtiva
      .params
      .subscribe(params => this.articulo = this.servicioArticulo.getArticulo(params['id'])!);
  }
  borrar() {
    this.servicioArticulo.deleteArticulo(this.articulo.id);
    this.router.navigate(['/articulos']);
  }
}