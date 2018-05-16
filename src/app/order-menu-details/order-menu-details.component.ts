import { Component, OnInit } from '@angular/core';
import { CartService, CartEventListener } from '../services/cart.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var $:any;

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

  /**
   * This function handles the updating of cart after an item was added
   * @param cart The new cart after adding an item
   */
  itemAdded(cart: any) {
      this.cart = cart;

      let cartElem = this.cartService.getCartElement();
      cartElem.animate({ scrollTop: cartElem.prop('scrollHeight') }, 300);
  }

  /**
   * This function handles the updating of cart after an item was removed
   * @param cart The new cart after removing an item
   */
  itemRemoved(cart: any) {
    this.cart = cart;
  }

  /**
   * This function returns the price of all the cart
   */
  getCartPrice() {
      //The cart price when there is no item in the cart
      let cartPrice = 0.00;

      // If the cart is not empty running over each item and sums it's price
      if (this.cart) {
          this.cart.forEach(item => { cartPrice += parseFloat(item.price) });
      }

      return cartPrice.toFixed(2);
  }

  ngOnInit() { 
  }
}
