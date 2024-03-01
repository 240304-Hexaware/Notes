import { Component } from '@angular/core';
import { CelsiusComponent } from '../celsius/celsius.component';
import { FahrenheitComponent } from '../fahrenheit/fahrenheit.component';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DataStoreService } from '../data-store.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CelsiusComponent, FahrenheitComponent, RouterOutlet, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(dataStore: DataStoreService) {
    this.dataStore = dataStore;
  }

  dataStore: DataStoreService;

  fTemp: number = 32;
  cTemp: number = 0;

}
