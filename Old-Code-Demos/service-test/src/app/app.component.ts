import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'service-test';
  testService: TestService;

  constructor(testService: TestService) {
    this.testService = testService;
    console.log("app root constructor: ", this.testService.test)
  }
}
