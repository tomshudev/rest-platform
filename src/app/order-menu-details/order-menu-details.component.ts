import { Component, OnInit } from '@angular/core';
import { CartService, CartEventListener } from '../services/cart.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Constants } from '../services/constants.service';

declare var $:any;

@Component({
  selector: 'app-order-menu-details',
  templateUrl: './order-menu-details.component.html',
  styleUrls: ['./order-menu-details.component.scss']
})
export class OrderMenuDetailsComponent implements OnInit, CartEventListener {

  cart = null;
  method = null;

  constructor(private cartService: CartService, private constants: Constants) { 
      this.cartService.subscribe(this);

      this.method = constants.orderMethods.order;
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

  changeMethod(method) {
    if (this.method !== method) {
        this.method = method;

        $('#order-method-slider').prop('checked', !$('#order-method-slider').prop('checked'))
    }
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
