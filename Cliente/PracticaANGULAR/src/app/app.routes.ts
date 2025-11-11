import { Routes } from '@angular/router';
import { Inicio } from './models/interfaces/inicio/inicio';
import { PaginaError } from './models/interfaces/pagina-error/pagina-error';
import { ListaArticulos } from './models/interfaces/lista-articulos/lista-articulos';
import { VerArticulo } from './models/interfaces/ver-articulo/ver-articulo';
import { ModificarArticulo } from './models/interfaces/modificar-articulo/modificar-articulo';
import { NuevoArticulo } from './models/interfaces/nuevo-articulo/nuevo-articulo';
import { BorrarArticulo } from './models/interfaces/borrar-articulo/borrar-articulo';
import { guardaNombreGuard } from './Guards/guarda-nombre-guard';
import { Login } from './models/interfaces/login/login';
import { FetchComponent } from './models/interfaces/fetch-component/fetch-component';
import { HttpComponent } from './models/interfaces/http-component/http-component';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'articulos', component: ListaArticulos, canActivate: [guardaNombreGuard] },
  { path: 'articulo/:id', component: VerArticulo },
  { path: 'fetcher', component: FetchComponent },
  { path: 'httpclient', component: HttpComponent },
  { path: 'modificar/:id', component: ModificarArticulo },
  { path: 'nuevo', component: NuevoArticulo, canActivate: [guardaNombreGuard] },
  { path: 'borrar/:id', component: BorrarArticulo },
  { path: 'login', component: Login },
  { path: '**', component: PaginaError }
];
