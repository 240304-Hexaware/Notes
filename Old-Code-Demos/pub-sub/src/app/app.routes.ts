import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

export const routes: Routes = [
    {path: "one", component: OneComponent},
    {path: "two", component: TwoComponent}
];
