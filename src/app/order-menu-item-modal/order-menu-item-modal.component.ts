import { Component, OnInit, Input } from '@angular/core';
import { ItemModalListener, ItemModalService } from '../services/item-modal.service';

declare var $:any;

@Component({
  selector: 'app-order-menu-item-modal',
  templateUrl: './order-menu-item-modal.component.html',
  styleUrls: ['./order-menu-item-modal.component.scss']
})
export class OrderMenuItemModalComponent implements OnInit {
  
  @Input() item: any;
  firstClick = true;

  constructor(private modalService: ItemModalService) { }

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

    this.item.options.forEach(option => {
        this.item.terms[option.headline] = false;
    });
  }

}
