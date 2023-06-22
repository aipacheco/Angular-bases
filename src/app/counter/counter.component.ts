import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>{{title}}</h1> <!--se declara en CounterComponent-->
  <hr>
  <p>Counter en counter.component</p>
  <h3>Counter: {{counter}} </h3> <!--se declara en CounterComponent-->
  <button (click)="increaseBy(1)">+1</button> <!--viene del metodo increaseBy en la clase CounterComponent -->
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent{
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value:number): void {
    this.counter += value
  }
  // decreaseBy(value:number): void { //se podria hacer pero usando -1 como param en increaseBy obtenemos el mismo resultado
  //   this.counter -= value
  // }

  reset(): void {
    this.counter = 10 //para resetear a 10
  }


}
