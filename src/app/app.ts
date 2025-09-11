import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cart } from './cart/cart';

import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  templateUrl : './app.html',
  styleUrl: './app.scss'

})
export class App {

  protected readonly title = signal('shopping-basket');
}

