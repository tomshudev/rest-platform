import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-menu-category',
  templateUrl: './order-menu-category.component.html',
  styleUrls: ['./order-menu-category.component.scss']
})
export class OrderMenuCategoryComponent implements OnInit {

  @Input() category: object;
  @Input() isSummarize: boolean;

  constructor() { }

  ngOnInit() {
  }

}
