import { Injectable } from '@angular/core';

export abstract class CartEventListener {

    abstract itemAdded(item);

    abstract itemRemoved(item);
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

  subscribe(listener: CartEventListener) {
      this.subscribers.push(listener);
  }

  updateListeners(callFunction: Function) {
      this.subscribers.forEach(listener => {
          callFunction.call(listener, this.cart);
      });
  }

  getNextID() {
      return this.cart.length;
  }

  addItem(item) {
      let newItem = Object.assign({}, item);
      newItem._cartID = this.getNextID();
      this.cart.push(newItem);

      this.updateListeners(this.subscribers[0].itemAdded);
  }

  removeItem(item) {
      this.cart = this.cart.filter((curr) => curr._cartID !== item._cartID);

      this.updateListeners(this.subscribers[0].itemRemoved);
  }
}
