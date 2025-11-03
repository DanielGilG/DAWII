import { Routes } from '@angular/router';
import { Inicio } from './models/interfaces/inicio/inicio';
import { PaginaError } from './models/interfaces/pagina-error/pagina-error';
import { ListaArticulos } from './models/interfaces/lista-articulos/lista-articulos';
import { VerArticulo } from './models/interfaces/ver-articulo/ver-articulo';
import { ModificarArticulo } from './models/interfaces/modificar-articulo/modificar-articulo';
import { BorrarArticulo } from './models/interfaces/borrar-articulo/borrar-articulo';
import { guardaNombreGuard } from './Guards/guarda-nombre-guard';

export const routes: Routes = [
    { path: '', component: Inicio, canActivate:[guardaNombreGuard]},
    { path: 'articulos', component: ListaArticulos},
    { path: 'articulo/:id', component: VerArticulo},
    { path: 'modificar/:id', component: ModificarArticulo},
    { path: 'borrar/:id', component: BorrarArticulo},
    { path: '**', component: PaginaError }
];