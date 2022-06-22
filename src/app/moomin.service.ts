export class MoominService {

  // lista alustetaan tässä ja välitetään ListComponentille, joka on TabsComponentin lapsikomponentti
  characters = [
    { name: 'Muumipeikko', side: ''},
    { name: 'Nuuskamuikkunen', side: ''}
  ];

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

  // ottaa vastaan muuttuneen sideAssigned2-muuttujan ja päivittää hahmon tiedot characters-listassa
  onSideChosen(characterInfo) {
    const position = this.characters.findIndex((character) => {
      return character.name === characterInfo.name;
    });
    this.characters[position].side = characterInfo.side;
  }

}
