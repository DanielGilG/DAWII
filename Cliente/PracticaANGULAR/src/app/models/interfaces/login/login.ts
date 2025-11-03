import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
    private miServicioLogin: ServicioLogin
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

    this.miServicioLogin.conectar(nombre, password);
    // Aquí iría la lógica para verificar las credenciales
    console.log(`Nombre: ${nombre}, Password: ${password}`);
  }
}
