import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  items: Item[];
  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.items = this.inventoryService.getItems();
  }

}
