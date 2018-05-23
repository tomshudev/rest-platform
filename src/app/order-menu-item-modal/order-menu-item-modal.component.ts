import { Component, OnInit, Input } from '@angular/core';
import { ItemModalListener, ItemModalService } from '../services/item-modal.service';
import { CartService } from '../services/cart.service';

declare var $:any;

@Component({
  selector: 'app-order-menu-item-modal',
  templateUrl: './order-menu-item-modal.component.html',
  styleUrls: ['./order-menu-item-modal.component.scss']
})
export class OrderMenuItemModalComponent implements OnInit {
  
  @Input() item: any;
  firstClick = true;

  constructor(private modalService: ItemModalService, private cartService: CartService) { }

  unselectItem() {
    this.modalService.selectItem(undefined);
            	
    $( "body").unbind("click");
  }

  checkDataFilled() {
      let result = true;

      this.item.options.forEach(option => {
          if (!this.item.terms[option.headline]) {
            result = false;
          }
      });

      return result;
  }

  addToCart() {
      let optionsText = [];
      let newPrice = parseFloat(this.item.price);

      // Adding each option to the list and summing the price
      this.item.selectedOptions.forEach(option => {
          optionsText.push(option.name);
          newPrice += option.price ? parseFloat(option.price) : 0;
      });

      this.item.optionsText = optionsText.join(', ');
      this.item.newPrice = newPrice.toFixed(2);

      // Adding the item to the cart
      this.cartService.addItem(this.item);
  }

  ngOnInit() {
    $('body').click(() => {
        if (this.firstClick) {
            this.firstClick = false;
        } else {
            this.firstClick = true;
            
            this.unselectItem();
        }
    });

    $('#item-modal').click((e) => {
        e.stopPropagation();
    })

    this.item.terms = [];
    this.item.selectedOptions = [];

    this.item.options.forEach(option => {
        this.item.terms[option.headline] = false;
    });
  }

}
