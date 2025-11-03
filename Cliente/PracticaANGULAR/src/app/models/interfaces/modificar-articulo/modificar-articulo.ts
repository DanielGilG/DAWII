import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Articulo } from '../../articulo';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServicioArticulo } from '../../../services/servicio-articulo';


@Component({
  selector: 'app-modificar-articulo',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './modificar-articulo.html',
  styleUrl: './modificar-articulo.css',
})
export class ModificarArticulo {
  articulo!: Articulo
  form!: FormGroup;

  newArticulo: Articulo = {
    id: '',
    nombre: '',
    categoria: '',
    descripcion: '',
    unidades: 0,
    precio: 0
  }

  constructor(
    private miRutaAtiva: ActivatedRoute,
    private miservicioArticulo: ServicioArticulo,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.miRutaAtiva
      .params
      .subscribe(params => this.articulo = this.miservicioArticulo.getArticulo(params['id'])!);

    this.form = this.fb.group({
      id: [this.articulo.id],
      nombre: [this.articulo.nombre],
      descripcion: [this.articulo.descripcion],
      unidades: [this.articulo.unidades],
      precio: [this.articulo.precio]
    });
  }

  modify() {
    console.log(this.newArticulo);

    this.newArticulo.id = this.form.value.id;
    this.newArticulo.nombre = this.form.value.nombre;
    this.newArticulo.descripcion = this.form.value.descripcion;
    this.newArticulo.unidades = this.form.value.unidades;
    this.newArticulo.precio = this.form.value.precio;

    this.miservicioArticulo.putArticulo(this.newArticulo);
  }
}
