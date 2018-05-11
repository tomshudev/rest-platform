import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-order-menu-item',
  templateUrl: './order-menu-item.component.html',
  styleUrls: ['./order-menu-item.component.scss']
})
export class OrderMenuItemComponent implements OnInit {

  @Input() serving: object;

  constructor() { }

  ngOnInit() {
  }

}
