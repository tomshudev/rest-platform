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
  warningMessage = "";

  constructor(private cartService: CartService, private constants: Constants) { 
      this.cartService.subscribe(this);

      this.method = constants.orderMethods.order;

      this.cart = this.cartService.getCart();
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
          this.cart.forEach(item => { 
              cartPrice += item.newPrice ? parseFloat(item.newPrice) : parseFloat(item.price)
        });
      }

      return cartPrice.toFixed(2);
  }

  canOrder() {
      let canOrder = true;

      // If the cart is empty or the method is order and the price is less than the minimum - 
      // Can't order, and update the warning message
      if (this.cart.length === 0) {
        this.warningMessage = "You need to add items to the cart"
        canOrder = false;
      } else if (this.method === this.constants.orderMethods.order && parseFloat(this.getCartPrice()) < 50) {
        this.warningMessage = "The minimum value for order is 50$";
        canOrder = false;
      }

      return canOrder;
  }

  ngOnInit() { 
  }
}
