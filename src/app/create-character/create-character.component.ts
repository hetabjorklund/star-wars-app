import { Component, OnInit } from '@angular/core';
import { LogService } from '../services/log.service';

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

  constructor(logService: LogService) {
    this.logService = logService;
   }

  ngOnInit(): void {
  }

  onSubmit(message: string) {
    this.logService.writeLog(message);
  }

}
