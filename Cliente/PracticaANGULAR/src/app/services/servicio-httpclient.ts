import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpclient {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/articulos';

  getAll(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.url);
  }
}
