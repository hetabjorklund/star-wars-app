export class MoominService {

  // lista alustetaan tässä
  // ListComponentilla on oma listamuuttuja characters, johon tämä asetetaan sen getCharacters-metodissa
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

  // ottaa vastaan ItemComponentin onAssign-metodilta tiedon hahmosta ja valitusta puolesta ja päivittää hahmon tiedot characters-listassa
  onSideChosen(characterInfo) {
    const position = this.characters.findIndex((character) => {
      return character.name === characterInfo.name;
    });
    this.characters[position].side = characterInfo.side;
  }

}
