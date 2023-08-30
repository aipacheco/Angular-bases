import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroNames: string[] = ["Spiderman", "Ironman", "Hulk", "Thor"]
// Se tiene que declarar la variable aqui para poderla usar en el html
public deletedHero?:string


removeLastHero(): void{
  // aqui le damos el valor que necesite
 this.deletedHero = this.heroNames.pop()
}
}
