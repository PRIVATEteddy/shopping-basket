import { Routes } from '@angular/router';
import { App } from './app';
import { Authentication } from './authentication/authentication';
import { AdminPanel } from './admin-panel/admin-panel';



export const routes: Routes = [

{path : "Main page", component: App },

{path : 'authentication', component: Authentication},

{path : 'admin-panel', component:  AdminPanel }
];

