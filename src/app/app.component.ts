import { Component, OnInit } from '@angular/core';
import { MoominService } from './services/moomin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  moominService : MoominService;

  constructor(moominService : MoominService) {
    this.moominService = moominService;
  }

  ngOnInit(): void {
    this.moominService.fetchCharacters();
  }
}
