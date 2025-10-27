import { Routes } from '@angular/router';
import { Inicio } from './models/interfaces/inicio/inicio';
import { PaginaError } from './models/interfaces/pagina-error/pagina-error';
import { ListaArticulos } from './models/interfaces/lista-articulos/lista-articulos';
import { VerArticulo } from './models/interfaces/ver-articulo/ver-articulo';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'articulos', component: ListaArticulos},
    { path: 'articulo', component: VerArticulo},
    { path: '**', component: PaginaError }
];