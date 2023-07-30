import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSides = [
    {display: 'Not assigned', value: ''},
    {display: 'Moomin', value: 'moomin'},
    {display: 'Non-moomin', value: 'nonmoomin'}
  ];

  logService: LogService;

  characterService: CharacterService;

  constructor(logService: LogService, characterService: CharacterService) {
    this.logService = logService;
    this.characterService = characterService;
   }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    this.logService.writeLog(submittedForm.value);
    if (!submittedForm.invalid) {
      this.characterService.addCharacter(submittedForm.value.name, submittedForm.value.side);
    }
  }

}
