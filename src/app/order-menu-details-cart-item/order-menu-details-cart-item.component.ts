import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

declare var $:any;

@Component({
  selector: 'app-order-menu-details-cart-item',
  templateUrl: './order-menu-details-cart-item.component.html',
  styleUrls: ['./order-menu-details-cart-item.component.scss']
})
export class OrderMenuDetailsCartItemComponent implements OnInit {

  @Input() item;

  constructor(private cartService: CartService) { }

  addItem() {
      this.cartService.addItem(this.item);
  }

  removeItem() {
      // Adding transition to the removed item, and than removing the item from the cart
      $(`#item-${this.item._cartID}`).addClass('cart-item__after-remove');
      setTimeout(() => this.cartService.removeItem(this.item), 400);
  }

  ngOnInit() {
      // Adding transition for the adding of an item
      setTimeout(() => $('.cart-item').addClass('cart-item__after-init'), 0);
  }

}
