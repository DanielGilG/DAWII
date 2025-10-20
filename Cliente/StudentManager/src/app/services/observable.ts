import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Observable {
  emitir(){
    console.log('Emitidos valores por el observable')
    this.mensaje.next("Valor1")
    this.mensaje.next("Valor2")
    this.mensaje.next("Valorn")
  }
}
