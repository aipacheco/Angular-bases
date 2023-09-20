import { Injectable} from "@angular/core";
import { Character } from "../interfaces/character.interface";
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService{

  public characters: Character[] =[
    {id: uuid(), name: "Krillin", power: 1000}, {id: uuid(),name: "Goku", power: 11000}, {id: uuid(),name: "Vegeta", power: 7500}
  ]

  addCharacter(character: Character):void{
const newCharacter : Character ={
id: uuid(), //se añade el id
...character //una copia de todas las propiedades anteriores

}
   this.characters.push(newCharacter)
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
