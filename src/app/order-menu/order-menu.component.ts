import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit {

  categories = null

  constructor(private dataService: DataService) { 
    this.categories = this.dataService.getData()
  }

  ngOnInit() {
  }

}
