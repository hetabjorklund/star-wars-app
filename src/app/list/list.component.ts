import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  activatedRoute: ActivatedRoute;

  characters = [];

  currentSide = 'all';

  characterService: CharacterService;

  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, characterService: CharacterService) {
    this.activatedRoute = activatedRoute;
    this.characterService = characterService;
   }

   // jotta muisti ei kuormitu, subscriber täytyy tuhota kun sitä ei enää tarvita
   // Angular tuhoaa itse omat sisäänrakennetut subscriberinsa kuten paramsin, mutta itse luodut pitää itse tuhota
   ngOnDestroy(): void {
     this.subscription.unsubscribe();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => { // ensimmäinen argumentti tekee jotain välitetyille reitin parametreille
        this.characters = this.characterService.getCharacters(params.side);
        this.currentSide = params.side;
      }
    );
    this.subscription = this.characterService.charactersChanged.subscribe(
      () => {
        this.characters = this.characterService.getCharacters(this.currentSide); // vaihtaa hahmon listalta toiselle heti kun puoli muuttuu
      }
    );
  }

}
