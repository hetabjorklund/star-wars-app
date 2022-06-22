import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoominService } from '../moomin.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [MoominService]
})
export class ItemComponent implements OnInit {

  // list.component.html-sivulla iteroidaan characters-listan läpi ja sidotaan läpikäytävä listan asia ItemComponentin character-muuttujaan
  // tieto tulee siis vanhemmalta (ListComponent) alas lapsikomponentille (ItemComponent) minkä takia @Input-annotaatio on täällä lapsen päädyssä
  @Input() character;

  moominService : MoominService;

  // tämä tieto siirtyy lapsikomponentti ItemComponentilta ylös vanhemmalle ListComponentille
  // koska tieto tulee lapselta, lapsen päädyssä on @Output-annotaatio
  @Output() sideAssigned1 = new EventEmitter<{name: string, side: string}>();

  constructor(moominService: MoominService) {
    this.moominService = moominService;
  }

  ngOnInit(): void {
  }

  // kun item.component.html-sivulla klikataan nappia, tällä metodilla
  // tieto valitusta puolesta päivittyy sideAssigned1-muuttujaan ja
  // siirtyy ylös vanhemmalle eli ListComponentille
  onAssign(side: string) {
    //this.sideAssigned1.emit({name: this.character.name, side: side});
    this.moominService.onSideChosen({name: this.character.name, side: side});
  }

}
