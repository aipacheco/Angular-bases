import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //html al que hace referencia
  styleUrls: ['./app.component.css'] //estilos importados
})
export class AppComponent {
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
