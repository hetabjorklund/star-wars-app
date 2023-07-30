import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  // list.component.html-sivulla iteroidaan characters-listan läpi ja
  // sidotaan läpikäytävä listan asia ItemComponentin character-muuttujaan
  // tieto tulee siis vanhemmalta (ListComponent) alas lapsikomponentille (ItemComponent)
  // minkä takia @Input-annotaatio on täällä lapsen päädyssä
  @Input() character;

  characterService : CharacterService;

  constructor(characterService: CharacterService) {
    this.characterService = characterService;
  }

  ngOnInit(): void {
  }

  // kun item.component.html-sivulla klikataan nappia, tällä metodilla
  // tieto valitusta puolesta päivittyy välitetään CharacterServicen onSideChosen-metodille,
  // joka päivittää hahmon tilan
  onAssign(side: string) {
    this.characterService.onSideChosen({name: this.character.name, side: side});
  }

}
