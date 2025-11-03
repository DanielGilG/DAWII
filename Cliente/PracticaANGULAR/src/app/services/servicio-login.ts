import { Injectable } from '@angular/core';
import { Usuario, USUARIOS } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioLogin {
  usuario : Usuario[] = USUARIOS
  isLogged : Boolean = false;

  conectar(): void {
    if this.usuario.find(u => u.nombre === nombre && u.password === password) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
