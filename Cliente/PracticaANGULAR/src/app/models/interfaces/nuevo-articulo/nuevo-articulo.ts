import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Articulo } from '../../articulo';
import { ServicioArticulo } from '../../../services/servicio-articulo';

@Component({
  selector: 'app-nuevo-articulo',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './nuevo-articulo.html',
  styleUrl: './nuevo-articulo.css',
})
export class NuevoArticulo {
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
    private miservicioArticulo: ServicioArticulo,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [''],
      nombre: [''],
      categoria: [''],
      descripcion: [''],
      unidades: [''],
      precio: ['']
    }
    );
  }

  create(): void {
    console.log(this.newArticulo);

    this.newArticulo.id = this.form.value.id;
    this.newArticulo.nombre = this.form.value.nombre;
    this.newArticulo.descripcion = this.form.value.descripcion;
    this.newArticulo.unidades = this.form.value.unidades;
    this.newArticulo.precio = this.form.value.precio;

    this.miservicioArticulo.postArticulo(this.newArticulo);
  }

}
