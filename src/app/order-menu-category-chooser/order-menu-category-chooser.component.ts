import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

const ACTIVE_CLASS_NAME = "category-chooser__name--active";

@Component({
  selector: 'app-order-menu-category-chooser',
  templateUrl: './order-menu-category-chooser.component.html',
  styleUrls: ['./order-menu-category-chooser.component.scss']
})
export class OrderMenuCategoryChooserComponent implements OnInit {

  @Input() categories: object;

  selectedCategoryID: String;

  constructor() { }

  selectCategory(id) {
      this.selectedCategoryID = id;

      $('html, body').animate({
          scrollTop: $(`#category-${id}`).offset().top
      }, 1000);
  }

  ngOnInit() {
  }

}
