import { Routes } from '@angular/router';
import { App } from './app';
import { Authentication } from './authentication/authentication';
export const routes: Routes = [
{path : "Main page", component: App },
{path : 'authentication', component: Authentication}
];

