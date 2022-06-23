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

  moominService: MoominService;

  constructor(activatedRoute: ActivatedRoute, moominService: MoominService) {
    this.activatedRoute = activatedRoute;
    this.moominService = moominService;
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.moominService.getCharacters(params.side);
      }
    );
  }

}
