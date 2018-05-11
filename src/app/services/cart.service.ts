import { Injectable } from '@angular/core';

export abstract class CartEventListener {

    abstract itemAdded(item);

    abstract itemRemoved(item);
}

@Injectable()
export class CartService {

  cart = [];
  subscribers: Array<CartEventListener> = [];

  constructor() { }

  subscribe(listener: CartEventListener) {
      this.subscribers.push(listener);
  }

  updateListeners(callFunction: Function) {
      this.subscribers.forEach(listener => {
          callFunction.call(listener, this.cart);
      });
  }

  addItem(item) {
      this.cart.push(item);

      this.updateListeners(this.subscribers[0].itemAdded);
  }

  removeItem(id) {
      this.cart = this.cart.filter((item) => item._id !== id);

      this.updateListeners(this.subscribers[0].itemRemoved);
  }
}
