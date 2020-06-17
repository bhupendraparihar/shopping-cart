import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log(this.item);
  }

  add(item: Item) {
    this.cartService.updateCart(item);
  }

}
