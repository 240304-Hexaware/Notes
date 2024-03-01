import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  testService: TestService;
  constructor(testService: TestService) {
    this.testService = testService;
    this.testService.test = "one";
    console.log("one constructor: ", this.testService.test)
    //window.location.replace("two")
  }

  ngOnInit() {
    window.location.replace("two")
  }
}
