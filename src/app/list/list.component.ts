import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // characters-lista tulee vanhemmalta eli TabsComponentilta
  // ListComponent on tässä suhteessa lapsikomponentti, eli @Input-annotaatio on täällä lapsen päädyn muuttujassa
  @Input() characters;

  // ItemComponentin sideAssigned1-muuttujaa kuunnellaan list.component.html-sivulla ja jos se muuttuu,
  // kutsutaan ListComponentin metodia onSideAssigned, joka muuttaa sideAssigned2:n tilan
  // ListComponent välittää sitten sideAssigned2:n muuttuneen tilan ylöspäin TabsComponentille, siksi annotaatio @Output on ListComponentin päädyssä
  @Output() sideAssigned2 = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  // kun käyttäjä on valinnut hahmon puolen, tieto tästä tulee list.component.html-sivun kuuntelijasta (sideAssigned1) joka kuuntelee tämän muuttujan muutoksia
  // muutoksen tapahtuessa list.component.html-sivulla kutsutaan onAssigned-metodia, jolle välitetään eventina muuttunut tieto
  // se otetaan vastaan ja asetetaan ListComponentin omaan sideAssigned2-muuttujaan tämä tieto
  onSideAssigned(sideInfo) {
    this.sideAssigned2.emit(sideInfo);
  }

}
