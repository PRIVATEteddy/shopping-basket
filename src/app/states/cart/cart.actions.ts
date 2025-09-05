// src/app/states/cart/cart.actions.ts
import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.reducer';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ item: CartItem }>()      
);

export const removeFromCart = createAction (
  '[cart] Remove from cart',
 props<{ id: number }>()
);
