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
    "_id": "5b002fc4078f7d6810bc033a",
    "name": "non aute",
    "photo": "5.jpg",
    "price": "22.2156",
    "description": "labore officia incididunt voluptate sunt adipisicing",
    "options": [
      {
        "headline": "mollit nostrud veniam",
        "min": 0,
        "max": 0,
        "options": [
          {
            "name": "adipisicing pariatur",
            "price": 3
          },
          {
            "name": "et exercitation",
            "price": 1
          },
          {
            "name": "eiusmod laborum",
            "price": 3
          },
          {
            "name": "irure anim",
            "price": 0
          }
        ]
      },
      {
        "headline": "sit minim Lorem",
        "min": 2,
        "max": 0,
        "options": [
          {
            "name": "ullamco eu",
            "price": 0
          },
          {
            "name": "et anim",
            "price": 2
          },
          {
            "name": "id non",
            "price": 0
          }
        ]
      },
      {
        "headline": "in reprehenderit sunt",
        "min": 0,
        "max": 3,
        "options": [
          {
            "name": "voluptate culpa",
            "price": 0
          },
          {
            "name": "aute sit",
            "price": 0
          },
          {
            "name": "amet excepteur",
            "price": 2
          },
          {
            "name": "consequat in",
            "price": 3
          },
          {
            "name": "non qui",
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
