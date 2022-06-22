import { Component, Input, OnInit } from '@angular/core';
import { MoominService } from '../services/moomin.service';

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

  moominService : MoominService;

  constructor(moominService: MoominService) {
    this.moominService = moominService;
  }

  ngOnInit(): void {
  }

  // kun item.component.html-sivulla klikataan nappia, tällä metodilla
  // tieto valitusta puolesta päivittyy välitetään MoominServicen onSideChosen-metodille,
  // joka päivittää hahmon tilan
  onAssign(side: string) {
    this.moominService.onSideChosen({name: this.character.name, side: side});
  }

}
