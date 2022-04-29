import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";

// NOTA: Este servicio a pasar de que ya lo importamos en el modulo dbz solo se va a ejecutar
//       hasta que alguien lo requiera y cuando sea requerido se va a crear la primera instancia
//       y ya cuando se haya creado va a ser la misma para cualquier componente, servicio, pipe o
//       lo que sea que lo consuma, incluso otro servicio.

//NOTA: El servicio es una clase abstracta donde vamos a colocar la información y los métodos para 
//      interactuar con fuentes externas o manipular el estado de la data de la aplicación, y nos
//      permite de una manera centralizarlos
@Injectable()
export class DbzService {

    // No quiero que accidentalmente accedan a mi data de personajes, es decir, el único
    // lado donde quiero que sea alterada es en mi servicios, entonces podemos indcarla como 
    // una propiedad private y por estándar le colocamos el _
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];

      // Creamos un getter y usamoe un spread para que separe los elementos independientes
      // que tiene el arreglo y que se cree uno nuevo
      get personajes(): Personaje[] {
          return [...this._personajes];
      }

    constructor(){
        console.log( 'Servicio Inicializado!!!...' );
    }

}