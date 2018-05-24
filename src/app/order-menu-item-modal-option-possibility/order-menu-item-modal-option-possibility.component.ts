import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-menu-item-modal-option-possibility',
  templateUrl: './order-menu-item-modal-option-possibility.component.html',
  styleUrls: ['./order-menu-item-modal-option-possibility.component.scss']
})
export class OrderMenuItemModalOptionPossibilityComponent implements OnInit {

  @Input() option: any;

  @Input() optionID: string;

  constructor() { }

  ngOnInit() {
  }

}
