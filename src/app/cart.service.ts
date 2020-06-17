import { Injectable } from '@angular/core';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Item[];
  constructor() { }

  updateCart(item: Item) {
    this.items.push(item);
  }
}
