import { Component } from '@angular/core';
import { removeFromCart } from '../states/cart/cart.actions';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectCartItems } from '../states/cart/cart.selector';
import { inject } from '@angular/core';
import { addToCart } from '../states/cart/cart.actions';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule, ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {
 private store = inject(Store);  // store is ready immediately
  items$ = this.store.select(selectCartItems);

  remove(id: number) {
    this.store.dispatch(removeFromCart({ id }));
  }


  addTest() {
  this.store.dispatch(addToCart({ item: { id: 1, name: 'Apple', price: 1.5, quantity: 0 } }));
}

}
