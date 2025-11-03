import { Injectable } from '@angular/core';
import { Usuario, USUARIOS } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioLogin {
  usuario : Usuario[] = USUARIOS
  isLogged : Boolean = false;
  nombre = '';

  conectar(nombre:string, password:string): void {
    if (this.usuario.find(user => user.nombre === nombre && user.password === password)) {
      this.isLogged = true;
      this.nombre = nombre;
      console.log("Credenciales correctas");
    } else {
      this.isLogged = false;
      console.log("Credenciales incorrectas");
    }
  }
}
