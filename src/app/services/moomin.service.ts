import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient } from '@angular/common/http';

// Annotaatio @Injectable tarvitaan, jotta tämän servicen voi joko injektoida muualle
// tai jotta tähän serviceen voi injektoida muita servicejä
@Injectable()
export class MoominService {

  // lista alustetaan tässä
  // ListComponentilla on oma listamuuttuja characters, johon tämä asetetaan sen getCharacters-metodissa
  private characters = [
    { name: 'Muumipeikko', side: ''},
    { name: 'Nuuskamuikkunen', side: ''}
  ];

  private logService: LogService;

  charactersChanged = new Subject<void>(); // voisi käyttää myös EventMitteriä

  constructor(logService: LogService, http : HttpClient) {
    this.logService = logService;
  }

  addCharacter(name: string, side: string) {
    // tarkista, onko hahmo jo olemassa
    const position = this.characters.findIndex((character) => {
      return character.name === name;
    });
    if (position != -1) {
      return;
    }
    const newCharacter = {name: name, side: side};
    this.characters.push(newCharacter);
    this.logService.writeLog("Added new character " + newCharacter.name);
  }

  // filtteröi characters-listan sen mukaan, minkä tabin käyttäjä on valinnut
  // slice tai filter palauttaa kopion listasta, ei itse listaa
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
        return character.side === chosenList;
      }
    );
  }

  // ottaa vastaan ItemComponentin onAssign-metodilta tiedon hahmosta ja valitusta puolesta ja päivittää hahmon tiedot characters-listassa
  onSideChosen(characterInfo) {
    const position = this.characters.findIndex((character) => {
      return character.name === characterInfo.name;
    });
    this.characters[position].side = characterInfo.side;
    this.charactersChanged.next(); // charactersChanged kertoo eteenpäin, että jotain on muuttunut
    this.logService.writeLog("Assigned " + characterInfo.name + " as " + characterInfo.side);
  }

}
