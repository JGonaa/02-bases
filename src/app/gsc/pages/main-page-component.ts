import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { GSCService } from '../services/gsc.service';


@Component({
  selector: 'app-gsc-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor(private gscService: GSCService) {}

  get characters(): Character[]{
    return [...this.gscService.characters];
  }

  onDeleteCharacterById(id: string):void {
    this.gscService.onDeleteCharacterById(id);
  }

  onNewCharacter(characters: Character) {
    this.gscService.addCharacter(characters);
  }

}
