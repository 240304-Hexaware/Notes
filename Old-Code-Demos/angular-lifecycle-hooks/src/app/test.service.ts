import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { 
    console.log("test service constructor")
    this.value = "test string"
  }

  value: string = "";
}
