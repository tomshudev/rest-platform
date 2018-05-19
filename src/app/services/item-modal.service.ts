import { Injectable } from '@angular/core';
import { listener } from '@angular/core/src/render3/instructions';
import { CartService } from './cart.service';

export abstract class ItemModalListener {
    abstract itemSelected(item);
}

@Injectable()
export class ItemModalService {

  subscribers: Array<ItemModalListener> = [];

  constructor(private cartService: CartService) { }

  subscribe(listener: ItemModalListener) {
      this.subscribers.push(listener);
  }

  private updateListeners(item) {
      this.subscribers.forEach((listener) => {
          listener.itemSelected(item);
      });
  }

  selectItem(item) {
      // If the item is a regular item - add it automatically
      // Otherwise, go to edit the item in the modal
      if (item && (!item.options || item.options.length === 0)) {
        this.cartService.addItem(item);
      } else {
        this.updateListeners(item);
      }
  }
}
