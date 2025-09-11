// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { App} from './app/app';
import {  persistCartMetaReducer} from './app/states/persis.meta-reducer'
import { cartReducer } from './app/states/cart/cart.reducer';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(App, {
  providers: [
     provideHttpClient(),
   provideRouter(routes),
    provideStore(
     { cart: cartReducer},
       { metaReducers: [persistCartMetaReducer] }
      // later: profile: profileReducer, etc.
    ),
  ],
});


provideStore({ cart: cartReducer },)
//ze gebruiker ngrx met alles maak json fake database/leer meer over ngrx  met de database maak een login die dan de input vergelijkt met json file    catcher inter error interceptor

