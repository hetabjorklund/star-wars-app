import { Injectable } from '@angular/core';

// Annotaatio @Injectable tarvitaan, jotta tämän servicen voi joko injektoida muualle
// tai jotta tähän serviceen voi injektoida muita servicejä
@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  writeLog(logText: string) {
    console.log(logText);
  }

}
