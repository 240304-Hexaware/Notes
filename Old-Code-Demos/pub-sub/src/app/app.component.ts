import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    OneComponent, 
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pub-sub';
}
