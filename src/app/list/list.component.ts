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

  constructor() { }

  ngOnInit(): void {
  }

}
