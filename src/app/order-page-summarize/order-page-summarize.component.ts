import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

declare var $:any;

@Component({
  selector: 'app-order-page-summarize',
  templateUrl: './order-page-summarize.component.html',
  styleUrls: ['./order-page-summarize.component.scss']
})
export class OrderPageSummarizeComponent implements OnInit {

  cart: any;

  constructor(private cartService: CartService) { 
    this.cart = {
      servings: this.cartService.getCart()
    };
  }

  ngOnInit() {
      let listHeight = this.cart.servings.length > 0 ? (22 * this.cart.servings.length) + 3 : 4;

      $('app-order-menu-category').css({
          'margin-bottom': `calc(100vh - ${listHeight}rem)`
      })
  }

}
