import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() {
    // this.fahrenheitTemp = 32;
    // this.celsiusTemp = 0;
    // this.kelvinTemp = 273;
  }

  // fahrenheitTemp: number;
  // celsiusTemp: number;
  // kelvinTemp: number; //ignore this for now

  cToF(cTemp: number): number {
    //((9/5) * c) + 32
    console.log("cToF conversion...")
    return (9/5 * cTemp) + 32;
  }

  fToC(fTemp: number): number {
    //x - 32 * (5/9)
    console.log("fToC conversion...")
    return (fTemp - 32) * (5/9);
  }
}
