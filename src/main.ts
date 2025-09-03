import { bootstrapApplication } from '@angular/platform-browser';
import { createReducer, provideStore } from '@ngrx/store';

import { App } from './app/app';
import { cartReducer } from './app/states/cart/cart.reducer'

bootstrapApplication(App, {
  providers :[
    provideStore({ cart: cartReducer }),
  ],
}).catch((err) => console.error(err));
