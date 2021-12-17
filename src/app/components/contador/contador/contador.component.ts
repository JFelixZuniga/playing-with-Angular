import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  public title: string = 'Contador!';
  public numero: number = 0;
  public base: number = 5;

  constructor() {}

  ngOnInit(): void {}

  acumulador(valor: number) {
    this.numero + valor <= 0 ? (this.numero = 0) : (this.numero += valor);
  }
}
