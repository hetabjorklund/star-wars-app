import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';
import { MoominService } from '../services/moomin.service';

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

  moominService: MoominService;

  constructor(logService: LogService, moominService: MoominService) {
    this.logService = logService;
    this.moominService = moominService;
   }

  ngOnInit(): void {
  }

  onSubmit(submittedForm) {
    this.logService.writeLog(submittedForm.value);
    if (!submittedForm.invalid) {
      this.moominService.addCharacter(submittedForm.value.name, submittedForm.value.side);
    }
  }

}
