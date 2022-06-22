import { Component, OnInit } from '@angular/core';
import { MoominService } from '../moomin.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  providers: [MoominService]
})
export class TabsComponent implements OnInit {

  // SIIRRETTY MUUMISERVICEEN
  // lista alustetaan tässä ja välitetään ListComponentille, joka on TabsComponentin lapsikomponentti
  // characters = [
  //   { name: 'Muumipeikko', side: ''},
  //   { name: 'Nuuskamuikkunen', side: ''}
  // ];

  // SIIRRETTY MUUMISERVICEEN
  // lista alustetaan tässä ja välitetään ListComponentille, joka on TabsComponentin lapsikomponentti
  // characters = [
  //   { name: 'Muumipeikko', side: ''},
  //   { name: 'Nuuskamuikkunen', side: ''}
  // ];

  characters = [];

  // minkä tabin käyttäjä on valinnut
  chosenList = 'all';

  moominService : MoominService;

  constructor(moominService: MoominService) {
    this.moominService = moominService;
  }

  // SIIRRETTY MUUMISERVICEEN
  // filtteröi characters-listan sen mukaan, minkä tabin käyttäjä on valinnut
  // slice tai filter palauttaa kopion listasta, ei itse listaa
  // getCharacters() {
  //   if (this.chosenList === 'all') {
  //     return this.characters.slice();
  //   }
  //   return this.characters.filter((character) => {
  //       return character.side === this.chosenList;
  //     }
  //   );
  // }

  getCharacters() {
    this.characters = this.moominService.getCharacters(this.chosenList);
    return this.characters;
  }

  ngOnInit(): void {
  }

  // onChoose kuuntelee klikkausta tabs-component.html-sivulla ja kertoo minkä valinnan tab näytetään
  onChoose(side: string) {
    this.chosenList = side;
  }

  // ottaa vastaan muuttuneen sideAssigned2-muuttujan ja päivittää hahmon tiedot characters-listassa
  // onSideChosen(characterInfo) {
  //   const position = this.characters.findIndex((character) => {
  //     return character.name === characterInfo.name;
  //   });
  //   this.characters[position].side = characterInfo.side;
  // }

}
