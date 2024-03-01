import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  testService: TestService;
  constructor(testService: TestService) {
    this.testService = testService;
    this.testService.test = "two";
    console.log("two constructor: ", this.testService.test)
    
  }
}
