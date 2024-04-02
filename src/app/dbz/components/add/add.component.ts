import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };

  }



}
