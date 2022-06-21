import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    { name: 'Muumipeikko', side: ''},
    { name: 'Nuuskamuikkunen', side: ''}
  ];

  chosenList = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.chosenList.slice();
    }
    return this.characters.filter((character) => {
        return character.side === this.chosenList;
      }
    );
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

}
