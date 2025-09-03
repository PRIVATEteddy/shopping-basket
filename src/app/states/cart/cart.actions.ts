import { CartItem } from './cart.reducer';
import { createAction, props } from "@ngrx/store"

    export const addToCart = createAction(
      '[Cart]) Add To Cart',
       props<{item : CartItem}>()
      );
