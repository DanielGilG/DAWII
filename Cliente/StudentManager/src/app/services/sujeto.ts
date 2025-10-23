import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Sujeto {
  mensaje:Subject<string> = new Subject<string>();
}
