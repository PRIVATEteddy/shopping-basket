
import { Routes } from '@angular/router';
import { App } from './app';
import { Authentication } from './authentication/authentication';
import { AdminPanel } from './admin-panel/admin-panel';
import {  ScatterChart  } from './chart-product/scatter-chart/scatter-chart';
import { BarChartComponent } from './charts/bar-chart/bar-chart';
import { MyDialogComponent } from './admin-panel/product-details-dialog/product-details-dialog';


export const routes: Routes = [

{path : "Main page", component: App },

{path : 'authentication', component: Authentication},

{path : 'admin-panel', component:  AdminPanel },

{path: 'bar-charts' ,component: BarChartComponent},

{path: 'scatter-chart' ,component: ScatterChart},

{path: 'dialog' ,component: MyDialogComponent}
];

