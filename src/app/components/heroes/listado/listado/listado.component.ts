import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  heroeDelete: string = '';

  borrarHeroe() {
    this.heroeDelete = this.heroes.shift() || '';
  }
}
