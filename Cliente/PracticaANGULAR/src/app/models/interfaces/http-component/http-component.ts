import { Component } from '@angular/core';
import { ServicioHttpclient } from '../../../services/servicio-httpclient';
import { Articulo } from '../../articulo';

@Component({
  selector: 'app-http-component',
  imports: [],
  templateUrl: './http-component.html',
  styleUrl: './http-component.css',
})
export class HttpComponent {
  articulos!: Articulo[];

  constructor(private servicioHttp: ServicioHttpclient) { }

  ngOnInit() {
    this.servicioHttp.getAll().subscribe({
      next: (datos) => (this.articulos = datos),
      error: (error) => console.log('Error fetching articles', error.status),
    });
  }
}
