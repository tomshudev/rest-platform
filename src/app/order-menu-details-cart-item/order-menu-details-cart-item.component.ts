import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemModalService } from '../services/item-modal.service';

declare var $:any;

@Component({
  selector: 'app-order-menu-details-cart-item',
  templateUrl: './order-menu-details-cart-item.component.html',
  styleUrls: ['./order-menu-details-cart-item.component.scss']
})
export class OrderMenuDetailsCartItemComponent implements OnInit {

  @Input() item;

  constructor(private cartService: CartService, private modalService: ItemModalService) { }

  addItem() {
      this.cartService.addItem(this.item);
  }

  removeItem() {
      // Adding transition to the removed item, and than removing the item from the cart
      $(`#item-${this.item._cartID}`).addClass('cart-item__after-remove');
      setTimeout(() => this.cartService.removeItem(this.item), 200);
  }

  editItem() {
    this.modalService.selectItem(this.item);
  }

  ngOnInit() {
      // Adding transition for the adding of an item
      setTimeout(() => $('.cart-item').addClass('cart-item__after-init'), 0);
  }

}
