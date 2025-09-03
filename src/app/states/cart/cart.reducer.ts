import { Cart } from './../../cart/cart';

import { createReducer, on } from "@ngrx/store";
import { addToCart } from "./cart.actions";

export interface CartItem {
  id: number;
  name: string;
  price: number;
}

export interface CartState {
  items: CartItem[];
}

export const initialState = {
  items: []
};


export const cartReducer = createReducer (
  initialState,


on(addToCart, (state, {item}) => {
  
})
)


