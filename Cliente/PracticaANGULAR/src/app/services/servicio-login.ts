import { Injectable } from '@angular/core';
import { Usuario, USUARIOS } from '../models/usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLogin {
  usuario : Usuario[] = USUARIOS
  isLogged : Boolean = false;

  private _name : BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly name$ = this._name.asObservable();

  private _logged : BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(this.isLogged);
  public readonly logged$ = this._logged.asObservable();

  conectar(nombre:string, password:string): void {
    if (this.usuario.find(user => user.nombre === nombre && user.password === password)) {
      this.isLogged = true;
      this._name.next(nombre);
      this._logged.next(this.isLogged);
      console.log("Credenciales correctas");
    } else {
      this.isLogged = false;
      this._name.next('');
      this._logged.next(this.isLogged);
      console.log("Credenciales incorrectas");
    }
  }

  desconectar(): void {
    this.isLogged = false;
    this._name.next('');
    this._logged.next(this.isLogged);
    console.log("Usuario desconectado");
  }
}
