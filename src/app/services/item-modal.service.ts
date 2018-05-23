import { Injectable } from '@angular/core';
import { listener } from '@angular/core/src/render3/instructions';
import { CartService } from './cart.service';

export abstract class ItemModalListener {
    abstract itemSelected(item, isEditing);
}

@Injectable()
export class ItemModalService {

  subscribers: Array<ItemModalListener> = [];

  constructor(private cartService: CartService) { }

  subscribe(listener: ItemModalListener) {
      this.subscribers.push(listener);
  }

  private updateListeners(item, isEditing) {
      this.subscribers.forEach((listener) => {
          listener.itemSelected(item, isEditing);
      });
  }

  selectItem(item, isEditing) {
      // If the item is a regular item - add it automatically
      // Otherwise, go to edit the item in the modal
      if (item && (!item.options || item.options.length === 0)) {
        this.cartService.addItem(item);
      } else {
        this.updateListeners(item, isEditing);
      }
  }
}
