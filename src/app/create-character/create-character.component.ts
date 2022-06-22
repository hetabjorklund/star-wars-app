import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
