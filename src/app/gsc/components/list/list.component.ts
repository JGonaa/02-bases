
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-gsc-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})

export class GSCListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Abberant',
    power: 11000
  },{
    name:'Acolyte',
    power: 500
  }]

  @Output()
  onDeleteById: EventEmitter<string> = new EventEmitter;

  onDeleteCharacterById(id?: string): void{
    if (!id) return;

    this.onDeleteById.emit(id);
  }

}
