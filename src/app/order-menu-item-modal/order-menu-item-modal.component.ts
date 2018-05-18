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

  constructor(private modalService: ItemModalService) {}

  ngOnInit() {
    $('body').click(() => {
        if (this.firstClick) {
            this.firstClick = false;
        } else {
            this.firstClick = true;
            this.modalService.selectItem(undefined);
            	
            $( "body").unbind( "click" )
        }
    });

    $('#item-modal').click((e) => {
        e.stopPropagation();
    })
  }

}
