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

  getCart() {
      return this.cart;
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

      this.updateListeners(this.subscribers[0].itemAdded);
  }

  removeItem(item) {
      this.cart = this.cart.filter((curr) => curr._cartID !== item._cartID);

      this.updateListeners(this.subscribers[0].itemRemoved);
  }
}
