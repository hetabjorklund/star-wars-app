import { Component, OnInit } from '@angular/core';
//import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  // characters = [];

  // minkä tabin käyttäjä on valinnut
  // chosenList = 'all';

  // characterService : CharacterService;

  // constructor(characterService: CharacterService) {
  //   this.characterService = characterService;
  // }

  constructor() {}

  // kutsuu CharacterServicen samannimistä metodia, joka filtteröi characters-listan sen mukaan, minkä tabin käyttäjä on valinnut
  // getCharacters() {
  //   this.characters = this.characterService.getCharacters(this.chosenList);
  //   return this.characters;
  // }

  ngOnInit(): void {
  }

  // onChoose kuuntelee klikkausta tabs-component.html-sivulla ja kertoo minkä valinnan tab näytetään
  // onChoose(side: string) {
  //   this.chosenList = side;
  // }

}
