No hay servicios, el hijo emite 3 cosas


Crear carpeta Modelos con trabajador.ts
```ts
export interface Trabajador {
  //campos
}
éxport const TRABAJADORES:Array ¿Trabajador{
//el txt...
}
```


## Dentro de "trabajdores.html"
```html
@for{}
```

## Dentro de trabajador.ts
```ts
like(id:number){
  this.likeTrabajador.emit(id)
}
```

para inyectar un sercvicio en trabajadores.ts:
```ts
miServicio=Inject(TrabajadoresService)
```

__wow!__

! Los datos no se meten en trabajadores.ts, sino que se crea una variable 
```ts
trabajadores!:Trabajador[]
```
y luego se mete todo con el servicio.
