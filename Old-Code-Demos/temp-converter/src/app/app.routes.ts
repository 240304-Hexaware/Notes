import { Routes } from '@angular/router';
import { CelsiusComponent } from './celsius/celsius.component';
import { FahrenheitComponent } from './fahrenheit/fahrenheit.component';
import { testGuard } from './test.guard';

export const routes: Routes = [
    { path: 'celsius', component: CelsiusComponent, canActivate: [testGuard]},
    { path: 'fahrenheit', component: FahrenheitComponent},
];
