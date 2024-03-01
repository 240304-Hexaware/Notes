import { Routes } from '@angular/router';
import { Test1Component } from './test-1/test-1.component';
import { Test2Component } from './test-2/test-2.component';

export const routes: Routes = [
    {path: "test1", component: Test1Component},
    {path: "test2", component: Test2Component}
];
