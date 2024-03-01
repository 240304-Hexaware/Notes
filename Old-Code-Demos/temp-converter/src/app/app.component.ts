import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { CelsiusComponent } from './celsius/celsius.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'temp-converter';
}
