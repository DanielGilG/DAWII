import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import data from '../../items/articulos.json' assert { type: 'json' };

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.html',
  styleUrl: './articulo.scss'
})
export class Articulo implements OnChanges{
  @Input() numero: number = 0;

  items = data;
  id:any;
  nombre:any;
  descripcion:any;
  precio:any;
  unidades:any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numero']) {
      const item = this.items.at(this.numero);
      this.id = item?.id;
      this.nombre = item?.nombre;
      this.descripcion = item?.descripcion ?? '';
      this.unidades = item?.unidades ?? 0;
    }
  }
}