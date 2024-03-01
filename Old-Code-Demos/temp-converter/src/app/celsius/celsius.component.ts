import { Component } from '@angular/core';
import { DataStoreService } from '../data-store.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-celsius',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './celsius.component.html',
  styleUrl: './celsius.component.css'
})
export class CelsiusComponent {
  constructor(dataStore: DataStoreService) {
    this.dataStore = dataStore;
  }

  dataStore: DataStoreService;
  cTemp: number = 0;
  fTemp: number = 32;
  newTemp() {
    this.fTemp = this.dataStore.cToF(this.cTemp)
  }
}
