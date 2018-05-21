import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ItemModalListener, ItemModalService } from '../services/item-modal.service';
declare var $:any;

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss']
})
export class OrderMenuComponent implements OnInit, ItemModalListener {
  
  categories = null;
  selectedItem = {
    "_id": "5b00496f664e555b6b637cf9",
    "name": "cupidatat non",
    "photo": "15.jpg",
    "price": "109.6775",
    "description": "exercitation ut sit esse ea eu",
    "options": [
      {
        "_id": "5b00496f5ed74ffff42e6615",
        "headline": "eiusmod exercitation sit",
        "min": 2,
        "max": 3,
        "options": [
          {
            "_id": "5b00496ff4f3e9f353365232",
            "name": "dolore id",
            "price": 3
          },
          {
            "_id": "5b00496f2eb4df0535c52013",
            "name": "duis fugiat",
            "price": 1
          },
          {
            "_id": "5b00496f2a3dc26c43377b82",
            "name": "exercitation qui",
            "price": 2
          },
          {
            "_id": "5b00496f281d0f149d4ee666",
            "name": "occaecat cillum",
            "price": 3
          }
        ]
      },
      {
        "_id": "5b00496f4b9ab2432d4eb4e9",
        "headline": "nulla adipisicing non",
        "min": 1,
        "max": 0,
        "options": [
          {
            "_id": "5b00496f707a61948cc01b5e",
            "name": "voluptate anim",
            "price": 1
          },
          {
            "_id": "5b00496f986c365864d4c5e2",
            "name": "ad elit",
            "price": 0
          },
          {
            "_id": "5b00496f7381acea6d28cf80",
            "name": "labore commodo",
            "price": 3
          },
          {
            "_id": "5b00496f23568ec9d577cb47",
            "name": "adipisicing consectetur",
            "price": 3
          }
        ]
      }
    ]
  }
  
  constructor(private dataService: DataService, private modalService: ItemModalService) { 
    this.categories = this.dataService.getData();
    this.modalService.subscribe(this);
  }

  itemSelected(item: any) {
    this.selectedItem = item;
  }

  ngOnInit() {
      $(window).scroll(() => {
        var scrollTop = $(window).scrollTop();

        // If the scrolling top has enterd into the menu - set the needed parts as fixed,
        // Otherwise, set it as normal without fixed position
        if ($('#menu-div').length !== 0 && $('#menu-div').position().top <= scrollTop) {
              $('.category-chooser').css({ 
                'position': 'fixed',
                top: 0
              });
              $('.order-details').css({ 
                'position': 'fixed',
                top: 0
              });
            $('.categories-flex').css({ 'margin-left': '30rem' });
        } else {
            $('.category-chooser').css({ 
              'position': 'relative',
            });
            $('.order-details').css({ 
              'position': 'relative',
            });
            $('.categories-flex').css({ 'margin-left': '0' });
        }

        $('app-order-menu-category').each((i) => {
          var elem = $($('app-order-menu-category')[i]);

            if (elem.position().top <= scrollTop + 50) {
                $('.category-chooser__name').removeClass('category-chooser__name--active');
                $(`#chooser-${elem.attr('id')}`).addClass('category-chooser__name--active');

                $('.category-chooser').animate({ scrollTop: $(`#chooser-${elem.attr('id')}`).offset().top - $('.category-chooser').offset().top + $('.category-chooser').scrollTop() - 20 }, 0);
            }
        })
    });
  }

}
