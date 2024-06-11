import { Injectable, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})

export class GSCService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Primus',
    power: 10000
  },{
    id: uuid(),
    name: 'Familiar',
    power: 100
  },{
    id: uuid(),
    name: 'Acolyte',
    power: 500
  }];

  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid() , ...character };

    this.characters.push(newCharacter);
  }

  onDeleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
