import { Component, OnInit, Input } from '@angular/core';

enum ItemsState {
  MaxItems,
  MaxOneItem,
  MinItems,
  MinOneItem,
  NotRequired
}

@Component({
  selector: 'app-order-menu-item-modal-option',
  templateUrl: './order-menu-item-modal-option.component.html',
  styleUrls: ['./order-menu-item-modal-option.component.scss']
})
export class OrderMenuItemModalOptionComponent implements OnInit {

  @Input() option: any;
  state = null;

  public itemsState = ItemsState;

  constructor() { }

  getItemsState() {
    let state;

    if (this.option.min === 0 && this.option.max > 1) {
        state = ItemsState.MaxItems;
    } else if (this.option.min === 0 && this.option.max === 1) {
        state = ItemsState.MaxOneItem;
    } else if (this.option.min > 1) {
        state = ItemsState.MinItems;
    } else if (this.option.min === 1) {
        state = ItemsState.MinOneItem;
    } else {
        state = ItemsState.NotRequired;
    }

    return state;
}

getDescriptionText() {
    let descText;

    if (this.state === ItemsState.MaxItems) {
        descText = `You can choose up to ${this.option.max} items`;
    } else if (this.state === ItemsState.MaxOneItem) {
        descText = `You can choose up to ${this.option.max} item`;
    } else if (this.state === ItemsState.MinItems) {
        descText = `You must choose ${this.option.min} items`;
    } else if (this.state === ItemsState.MinOneItem) {
        descText = `You must choose ${this.option.min} item`;
    }

    return descText;
}

  ngOnInit() {
      this.state = this.getItemsState();
  }

}
