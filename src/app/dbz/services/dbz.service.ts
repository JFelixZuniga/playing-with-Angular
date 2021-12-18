import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 13500 },
    { nombre: 'N° 18', poder: 10000 },
  ];

  get personajes(): Personaje[] {
    // Con el operador rest ronpemos la refencia de la propiedad _personajes, es una byuena práctica (así evitamos modificar directamente la propiedad)
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}

// La data y su manejo idealmente debe estar centraliazada para que sea la misma en todos los componentes
