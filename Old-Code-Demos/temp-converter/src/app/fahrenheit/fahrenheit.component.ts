import { Component } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fahrenheit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './fahrenheit.component.html',
  styleUrl: './fahrenheit.component.css'
})
export class FahrenheitComponent {
  constructor(dataStore: DataStoreService) {
    this.dataStore = dataStore;
  }

  dataStore: DataStoreService;
  fTemp: number = 32;
  cTemp: number = 0;
  newTemp() {
    this.cTemp = this.dataStore.fToC(this.fTemp);
  }
}
