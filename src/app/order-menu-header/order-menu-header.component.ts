import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-menu-header',
  templateUrl: './order-menu-header.component.html',
  styleUrls: ['./order-menu-header.component.scss']
})
export class OrderMenuHeaderComponent implements OnInit {

  @Input() isOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

}
