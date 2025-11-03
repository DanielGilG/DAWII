import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServicioLogin } from '../../../services/servicio-login';
import { Usuario } from '../../usuario';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario! : Usuario;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private miServicioLogin: ServicioLogin,
    private miRouter: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: [''],
      password: ['']
    });
  }

  conectar() {
    const nombre = this.form.value.nombre;
    const password = this.form.value.password;
    console.log(nombre, password);
    
    this.miServicioLogin.conectar(nombre, password);
    this.miRouter.navigate(['/articulos']);
  }
}
