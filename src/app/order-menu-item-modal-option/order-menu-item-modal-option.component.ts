import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

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

  selectedOptions = [];

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

    itemSelected(posibility) {
        let amount = this.selectedOptions.length;

        // If the option does not already in the selected options, add it to the list and add the selected class
        // Otherwise, remove it from the list and remove the selected class
        if ((this.selectedOptions.indexOf(posibility) === -1) &&
                (((this.state === ItemsState.MaxItems || this.state === ItemsState.MaxOneItem) && amount < this.option.max) ||
                ((this.state === ItemsState.MinItems || this.state === ItemsState.MinOneItem) && amount < this.option.min))) {
            this.selectedOptions.push(posibility);
            $(`#posibility-${posibility._id}`).addClass('possibility--selected');
        } else {
            this.selectedOptions = this.selectedOptions.filter((val) => val.name !== posibility.name);
            $(`#posibility-${posibility._id}`).removeClass('possibility--selected');
        }

        this.updateOthers();
    }

    updateOthers() {
        let amount = this.selectedOptions.length;

        if (((this.state === ItemsState.MaxItems || this.state === ItemsState.MaxOneItem) && amount === this.option.max) ||
            ((this.state === ItemsState.MinItems || this.state === ItemsState.MinOneItem) && amount === this.option.min)) {
            
                //$(`#option-${this.option._id}>.option__possibilities>app-order-menu-item-modal-option-possibility>.possibility`).not('.possibility--selected').addClass('possibility--blocked');
            $(`.pos-option-${this.option._id}`).not('.possibility--selected').addClass('possibility--blocked');
        } else {

            $(`.pos-option-${this.option._id}`).not('.possibility--selected').removeClass('possibility--blocked');
        }
    }

  ngOnInit() {
      this.state = this.getItemsState();

      $('.possibility--blocked').click((e) => {
            e.preventDefault();
      })
  }

}
