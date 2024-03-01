import { Routes } from '@angular/router';
import { TwoComponent } from './two/two.component';
import { OneComponent } from './one/one.component';

export const routes: Routes = [
    {path: "one", component: OneComponent},
    {path: "two", component: TwoComponent}
];
