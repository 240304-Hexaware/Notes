import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  name ='';
  default = 'test';

  click() {
    this.name = this.default;
  }

  style: string[] = [`display: flex; flex-direction: row `]
}
