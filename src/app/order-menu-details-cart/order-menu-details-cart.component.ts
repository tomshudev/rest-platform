import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

declare var $:any;

@Component({
  selector: 'app-order-menu-details-cart',
  templateUrl: './order-menu-details-cart.component.html',
  styleUrls: ['./order-menu-details-cart.component.scss']
})
export class OrderMenuDetailsCartComponent implements OnInit {

  @Input() cart: object;

  constructor(private cartService: CartService) { }

  ngOnInit() {
      this.cartService.registerCartElement($('.cart'));
  }

}
