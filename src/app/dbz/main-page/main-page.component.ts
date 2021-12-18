import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
// import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // forma 1 de obtener la información
  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  // forma 2: mediante un getter obtenemos la información
  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(nuevoPersonaje: Personaje) {
  //   this.personajes.push(nuevoPersonaje);
  // }

  constructor() {
    // forma 1 de obtener la información
    // this.personajes = this.dbzService.personajes;
  }
}
