import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { getJSON, setJSON } from '../services/storage';
import { CartState } from './cart/cart.reducer';

const CART_KEY = 'cart';

export function persistCartMetaReducer<S>(reducer: ActionReducer<S>): ActionReducer<S> {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const saved = getJSON<CartState>(CART_KEY);
      if (saved) {
        state = { ...(state as any), cart: saved } as S;
      }
    }

    const nextState = reducer(state, action);

    const cart = (nextState as any).cart as CartState | undefined;
    if (cart) setJSON(CART_KEY, cart);

    return nextState; // ← keep this one
  };
}
