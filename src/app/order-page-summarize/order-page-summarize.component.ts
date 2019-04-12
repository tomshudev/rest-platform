import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService, CartEventListener } from '../services/cart.service';

declare var $:any;

@Component({
  selector: 'app-order-page-summarize',
  templateUrl: './order-page-summarize.component.html',
  styleUrls: ['./order-page-summarize.component.scss']
})
export class OrderPageSummarizeComponent implements OnInit, CartEventListener {

  cart: any;

  constructor(private cartService: CartService) { 
    this.cart = {
      servings: this.cartService.getCart()
    };

    this.cartService.subscribe(this);
  }

  updateHeight() {
    let listHeight = `100vh`;

      if (this.cart.servings.length === 0) {
          listHeight = `4rem`;
      } else if (this.cart.servings.length > 0 && this.cart.servings.length < 3) {
          listHeight = `${(22 * this.cart.servings.length) + 3}rem`;
      } else if (this.cart.servings.length === 3) {
        listHeight = `${(22 * this.cart.servings.length) + 2}rem`;
      }

      //if (listHeight) {
        $('app-order-menu-category').css({
            'margin-bottom': `calc(100vh - ${listHeight})`
        })
      //}
  }

  updateCart() {
      this.cart = {
        servings: this.cartService.getCart()
      };

      this.updateHeight();
  }
  
  itemAdded(item: any) {
      this.updateCart();
  }

  itemRemoved(item: any) {
      this.updateCart();
  }

  ngOnInit() {
      this.updateHeight();
  }

}
