import { Component, OnInit } from '@angular/core';
import { CartService, CartEventListener } from '../services/cart.service';

@Component({
  selector: 'app-order-menu-details',
  templateUrl: './order-menu-details.component.html',
  styleUrls: ['./order-menu-details.component.scss']
})
export class OrderMenuDetailsComponent implements OnInit, CartEventListener {

  cart = null;

  constructor(private cartService: CartService) { 
      this.cartService.subscribe(this);
  }

  itemAdded(cart: any) {
      this.cart = cart;
  }
  itemRemoved(item: any) {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
  }

}
