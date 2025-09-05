
// src/app/states/cart/cart.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { addToCart,removeFromCart } from './cart.actions';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;  // keep this as "quantity"
}

export interface CartState {
  items: CartItem[];
}

export const initialState: CartState = {
  items: []
};



export const cartReducer = createReducer(
  initialState,

  on(addToCart, (state, { item }): CartState => {
    const existing = state.items.find(i => i.id === item.id);
    if (existing) {
      const items = state.items.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      return { ...state, items };
    }
    const newItem = { ...item, quantity: 1 };
    return { ...state, items: [...state.items, newItem] };
  }),


  on(removeFromCart, (state, { id }): CartState => ({
    ...state,
    items: state.items.filter((i) => i.id !== id)  
  }))
);
