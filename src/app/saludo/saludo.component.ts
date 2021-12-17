import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
})
export class SaludoComponent implements OnInit {
  // Propiedades de la clase, siendo las únicas que se pueden utilizar en el Html
  mensaje: string;
  identiParrafo: string;
  identiInput: string;

  // El construcctor queda reservador solo para inicializar variables
  constructor() {
    this.mensaje = 'Soy parte del navbar (desde la clase)';
    this.identiParrafo = 'parrafo__principal';
    this.identiInput = 'text';

    setTimeout(() => {
      this.mensaje = 'Otro mensaje desde la clase';
      this.identiParrafo = "main"
    }, 3000);
  }

  ngOnInit(): void {}

  mostrarSaludo(): string {
    return 'Saludo desde el método!';
  }
}
