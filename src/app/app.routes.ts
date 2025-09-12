
import { Routes } from '@angular/router';
import { App } from './app';
import { Authentication } from './authentication/authentication';
import { AdminPanel } from './admin-panel/admin-panel';
import {  ScatterChart  } from './chart-product/scatter-chart/scatter-chart';
import { BarChartComponent } from './charts/scatter-chart/scatter-chart';



export const routes: Routes = [

{path : "Main page", component: App },

{path : 'authentication', component: Authentication},

{path : 'admin-panel', component:  AdminPanel },

{path: 'charts' ,component: BarChartComponent},

{path: 'scatter-chart' ,component: ScatterChart}
];

