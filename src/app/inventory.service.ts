import { Injectable } from '@angular/core';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }

  getItems(): Item[] {
    return [
      {
        id: '1',
        name: 'ginger',
        price: 50,
        available: true,
        quantity: '100g'
      },
      {
        id: '2',
        name: 'raddish',
        price: 20,
        available: true,
        quantity: '250g'
      },
      {
        id: '3',
        name: 'chilli',
        price: 30,
        available: true,
        quantity: '100g'
      }
    ];
  }
}
