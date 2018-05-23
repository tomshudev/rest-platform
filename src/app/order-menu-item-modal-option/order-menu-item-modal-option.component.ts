import { Component, OnInit, Input } from '@angular/core';

declare var $:any;

enum ItemsState {
  MaxItems,
  MaxOneItem,
  MinMaxItems,
  MinItemMaxItems,
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

  @Input() item: any;
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
    } else if (this.option.min > 1 && this.option.min < this.option.max) {
        state = ItemsState.MinMaxItems;
    } else if (this.option.min === 1 && this.option.min < this.option.max) {
        state = ItemsState.MinItemMaxItems;
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
    } else if (this.state === ItemsState.MinMaxItems) { 
        descText = `You must choose ${this.option.min} items and up to ${this.option.max} items`;
    } else if (this.state === ItemsState.MinItemMaxItems) { 
        descText = `You must choose ${this.option.min} item and up to ${this.option.max} items`;
    } else if (this.state === ItemsState.MinItems) {
        descText = `You must choose ${this.option.min} items`;

        this.option.max = this.option.min;
    } else if (this.state === ItemsState.MinOneItem) {
        descText = `You must choose ${this.option.min} item`;

        this.option.max = this.option.min;
    }

    return descText;
}

    itemSelected(posibility) {
        let amount = this.option.selectedOptions.length;
        let doesFillTerms = this.item.terms[this.option.headline];

        // If the option does not already in the selected options, add it to the list and add the selected class
        // Otherwise, remove it from the list and remove the selected class
        if (!posibility.checked ||
            (this.option.selectedOptions.indexOf(posibility) === -1) &&
                ((this.state !== ItemsState.MaxItems && this.state !== ItemsState.MaxOneItem && !doesFillTerms) ||
                ((this.state === ItemsState.MaxItems || this.state === ItemsState.MaxOneItem || this.state === ItemsState.MinMaxItems || this.state === ItemsState.MinItemMaxItems) && amount < this.option.max))) {
            posibility.checked = true;
            this.option.selectedOptions.push(posibility);
            $(`#posibility-${posibility._id}`).addClass('possibility--selected');
        } else {
            posibility.checked = false;
            this.option.selectedOptions = this.option.selectedOptions.filter((val) => val._id !== posibility._id);
            this.item.selectedOptions = this.item.selectedOptions.filter((val) => val._id !== posibility._id);
            $(`#posibility-${posibility._id}`).removeClass('possibility--selected');
        }

        this.updateOthers();

        // Checking the terms
        doesFillTerms = this.doesFillTerms();
    }

    updateOthers() {
        let amount = this.option.selectedOptions.length;

        if (amount === this.option.max) {
            $(`.pos-option-${this.option._id}`).not('.possibility--selected').addClass('possibility--blocked');
        } else {
            $(`.pos-option-${this.option._id}`).not('.possibility--selected').removeClass('possibility--blocked');
        }
    }

    doesFillTerms() {
        let amount = this.option.selectedOptions.length;
        let doesFillTerms = false    

        if (((this.state === ItemsState.MaxItems || this.state === ItemsState.MaxOneItem) && amount <= this.option.max && amount >= this.option.min) ||
            ((this.state === ItemsState.MinItems || this.state === ItemsState.MinOneItem) && amount === this.option.min) ||
            ((this.state === ItemsState.MinItemMaxItems || this.state === ItemsState.MinMaxItems) && amount >= this.option.min && amount <= this.option.max)) {
            
                doesFillTerms = true;

                // Adding the options to the item's selected options
                this.addOptions();
        }

        this.item.terms[this.option.headline] = doesFillTerms;
        return doesFillTerms;
    }


    addOptions() {
        // Running over all the current selected options
        this.option.selectedOptions.forEach(option => {
            // Checking if can add to the selected options - if the id exists don' add
            let canAdd = this.item.selectedOptions.filter((curr) => {
                    return curr._id === option._id
                }).length === 0;
            
            // Adding to the list if needed
            if (canAdd) {
                this.item.selectedOptions.push(option)
            }
        });
    }

  ngOnInit() {
      if (!this.option.selectedOptions) {
        this.option.selectedOptions = [];
      }

      this.state = this.getItemsState();
      this.doesFillTerms();
      this.updateOthers();

      $('.possibility--blocked').click((e) => {
            e.preventDefault();
      })
  }

}
