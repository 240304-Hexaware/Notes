import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  test: string;

  constructor() {
    this.test = "test"
  }
}
