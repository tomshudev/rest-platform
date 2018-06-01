import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemModalService } from '../services/item-modal.service';

@Component({
  selector: 'app-order-menu-item',
  templateUrl: './order-menu-item.component.html',
  styleUrls: ['./order-menu-item.component.scss']
})
export class OrderMenuItemComponent implements OnInit {

  @Input() serving;
  @Input() canAdd;

  constructor(private modalService: ItemModalService) { }

  addItem() {
      this.modalService.selectItem(this.serving, false);
  }

  ngOnInit() {
  }

}
