import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";
import { HttpClient } from '@angular/common/http';

// Annotaatio @Injectable tarvitaan, jotta tämän servicen voi joko injektoida muualle
// tai jotta tähän serviceen voi injektoida muita servicejä
@Injectable()
export class CharacterService {

  // lista alustetaan tässä, getCharacters() hakee lisää hahmoja ja lisää ne listan jatkoksi
  private characters = [
    { name: 'Luke Skywalker', side: 'light'},
    { name: 'Darth Vader', side: 'dark'}
  ];

  charactersChanged = new Subject<void>(); // voisi käyttää myös EventMitteriä

  httpClient: HttpClient;

  private logService: LogService;

  starWarsAPI : string = 'https://swapi.dev/api/people/';

  constructor(logService: LogService, httpClient : HttpClient) {
    this.logService = logService;
    this.httpClient = httpClient;
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

  // vanha tapa tehdä get, deprekoitu, uusi next-error-complete-tapa alla
  // fetchCharacters() {
  //   this.httpClient.get(this.starWarsAPI).subscribe(
  //     (res) => {
  //       console.log(res);
  //     },
  //     (error) => {console.error()}
  //   );
  // }

  fetchCharacters() {
    this.httpClient.get(this.starWarsAPI).subscribe({
      next: (res) => {
        console.log(res);
        const newCharacters = res['results'].map(character => {
          return {name: character.name, side: ''};
        });
        this.characters = [... this.characters, ... newCharacters];
        this.charactersChanged.next(); // kerro charactersChanged:ille että jotain on muuttunut, jotta ListComponentin ngOnInit tietää sen ja päivittää listan
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('fetchCharacters complete');
      }
    });
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
