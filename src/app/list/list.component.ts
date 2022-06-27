import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemComponent } from '../item/item.component';
import { MoominService } from '../services/moomin.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activatedRoute: ActivatedRoute;

  // characters-lista tulee vanhemmalta eli TabsComponentilta
  // ListComponent on tässä suhteessa lapsikomponentti, eli @Input-annotaatio on täällä lapsen päädyn muuttujassa
  //@Input() characters;
  characters = [];

  currentSide = 'all';

  moominService: MoominService;

  constructor(activatedRoute: ActivatedRoute, moominService: MoominService) {
    this.activatedRoute = activatedRoute;
    this.moominService = moominService;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => { // ensimmäinen argumentti tekee jotain välitetyille reitin parametreille
        this.characters = this.moominService.getCharacters(params.side);
        this.currentSide = params.side;
      } //,
      // (error) => {}, // jos tapahtuisi virhe (ei päde paramsin kohdalla, mutta muiden pyyntöjen kohdalla voisi olla)
      // () => {console.log("ListComponentin ngOnInit valmis")} // mitä tehdään kun metodin muut askeleet on suoritettu
    );
    this.moominService.charactersChanged.subscribe(
      () => {
        this.characters = this.moominService.getCharacters(this.currentSide); // vaihtaa hahmon listalta toiselle heti kun puoli muuttuu
      }
    );

  }

}
