import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Observable {
  mensaje$: Observable<string> = this.mensaje$.asObservable();
}
