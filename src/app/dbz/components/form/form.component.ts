import { Component, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

@Output()
public onNewCharacter: EventEmitter<Character> = new EventEmitter()

public character: Character = {
  name: '',
  power: 0
}

addCharacter():void{
  // debugger; para añadir un break
  console.log(this.character)
  if (this.character.name.length === 0) return;
  this.onNewCharacter.emit(this.character)
  this.character = {name: "", power: 0}
}
}
