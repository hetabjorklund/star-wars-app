import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  charactersLoaded = false;

  characterService : CharacterService;

  constructor(characterService : CharacterService) {
    this.characterService = characterService;
  }

  ngOnInit(): void {
    this.characterService.fetchCharacters();
    this.charactersLoaded = true;
  }

}
