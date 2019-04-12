import { Injectable } from '@angular/core';

export abstract class CartEventListener {

    abstract itemAdded(cart);

    abstract itemRemoved(cart);
}

@Injectable()
export class CartService {

  cart = [];
  cartElement = null;
  subscribers: Array<CartEventListener> = [];

  constructor() { }

  registerCartElement(cartElem) {
      this.cartElement = cartElem;
  }

  getCartElement() {
      return this.cartElement;
  }

  getCart() {
      return this.cart;
  }

  subscribe(listener: CartEventListener) {
      this.subscribers.push(listener);
  }

  updateListenersAdd(callFunction: Function) {
      this.subscribers.forEach(listener => {
          listener.itemAdded(this.cart);
      });
  }

  updateListenersRemove(callFunction: Function) {
    this.subscribers.forEach(listener => {
        listener.itemRemoved(this.cart);
    });
}

  getNextID() {
      return this.cart.length;
  }

  addItem(item) {
      // If the item is in editing mode - don't create new one - replace the old one
      if (item.isEditing) {
        // Searching the edited item and replace it with the new item
        this.cart.filter((elem, index, cart) => {
            if (elem._cartID === item._cartID) {
                cart[index] = item;
            }
        })
      } else {
        let newItem = Object.assign({}, item);
        newItem._cartID = this.getNextID();
        this.cart.push(newItem);

        let newOptions = [];

        item.options.forEach(option => {
            let newOpt = Object.assign({}, option);
            newOpt.options = [];
            newOpt.selectedOptions = [];

            option.options.forEach(pos => {
                let newPos = Object.assign({}, pos);

                newPos.checked = false;
                newOpt.options.push(newPos);
            });

            newOptions.push(newOpt);
        });

        item.options = newOptions;

        item.terms = [];  
      }

      this.updateListenersAdd(this.subscribers[0].itemAdded);
  }

  removeItem(item) {
      this.cart = this.cart.filter((curr) => curr._cartID !== item._cartID);

      this.updateListenersRemove(this.subscribers[0].itemRemoved);
  }
}
