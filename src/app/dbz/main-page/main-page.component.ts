import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    { nombre: 'Goku', poder: 15000 },
    { nombre: 'Vegeta', poder: 13500 },
    { nombre: 'N° 18', poder: 10000 },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  agregarNuevoPersonaje(nuevoPersonaje: Personaje) {
    this.personajes.push(nuevoPersonaje);
  }
}
