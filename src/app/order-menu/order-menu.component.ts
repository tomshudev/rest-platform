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
    "isEditing": false,
    "_id": "5b052ee1fe19917850e8c5ec",
    "name": "ad quis",
    "photo": "7.jpg",
    "price": "23.3687",
    "description": "voluptate sit excepteur minim officia et",
    "options": [
      {
        "_id": "5b052ee1401f04358e11e92c",
        "headline": "minim mollit est",
        "min": 0,
        "max": 3,
        "options": [
          {
            "_id": "5b052ee18ad913baead5e832",
            "name": "aliquip ea",
            "price": 0
          },
          {
            "_id": "5b052ee16dc62ecd644adb14",
            "name": "enim magna",
            "price": 0
          },
          {
            "_id": "5b052ee1c77d685a8a03be19",
            "name": "sit cupidatat",
            "price": 1
          },
          {
            "_id": "5b052ee1c2260465f53ab175",
            "name": "aute ut",
            "price": 3
          },
          {
            "_id": "5b052ee10902b2096eaf8818",
            "name": "minim nisi",
            "price": 3
          }
        ]
      },
      {
        "_id": "5b052ee177bd8e1d11a00bdd",
        "headline": "et eu tempor",
        "min": 0,
        "max": 1,
        "options": [
          {
            "_id": "5b052ee104ee850a10041730",
            "name": "et et",
            "price": 3
          },
          {
            "_id": "5b052ee19b2b8bde90bf0de5",
            "name": "ullamco adipisicing",
            "price": 3
          },
          {
            "_id": "5b052ee1dc1b19590c24aa0c",
            "name": "adipisicing occaecat",
            "price": 2
          },
          {
            "_id": "5b052ee15aa0959584b1cc17",
            "name": "excepteur fugiat",
            "price": 3
          },
          {
            "_id": "5b052ee1a7d8e4e4d77b4007",
            "name": "excepteur tempor",
            "price": 0
          }
        ]
      },
      {
        "_id": "5b052ee1cffdbf333e4d3e62",
        "headline": "ipsum pariatur dolor",
        "min": 2,
        "max": 4,
        "options": [
          {
            "_id": "5b052ee1f65b9d95cd8f572f",
            "name": "commodo occaecat",
            "price": 1
          },
          {
            "_id": "5b052ee11eee268e246f2f67",
            "name": "velit veniam",
            "price": 3
          },
          {
            "_id": "5b052ee1f9969172bcfca36a",
            "name": "proident Lorem",
            "price": 3
          },
          {
            "_id": "5b052ee1ca3bae9066384d03",
            "name": "consectetur cupidatat",
            "price": 2
          },
          {
            "_id": "5b052ee1762b7ef6ae418104",
            "name": "ullamco tempor",
            "price": 1
          }
        ]
      },
      {
        "_id": "5b052ee1709ff29a0c3a400c",
        "headline": "qui exercitation ullamco",
        "min": 1,
        "max": 3,
        "options": [
          {
            "_id": "5b052ee1e5a16adbaf970aae",
            "name": "ut irure",
            "price": 0
          },
          {
            "_id": "5b052ee13433bc0a4fd68805",
            "name": "Lorem id",
            "price": 1
          },
          {
            "_id": "5b052ee1427f64a278e58a74",
            "name": "sit in",
            "price": 3
          },
          {
            "_id": "5b052ee16f40cb9f27466767",
            "name": "quis dolor",
            "price": 0
          },
          {
            "_id": "5b052ee1ebccb52c802553a9",
            "name": "ipsum laboris",
            "price": 3
          }
        ]
      },
      {
        "_id": "5b052ee15d1d9e627251767e",
        "headline": "voluptate est non",
        "min": 1,
        "max": 0,
        "options": [
          {
            "_id": "5b052ee1347f79cfeb4ca7ad",
            "name": "fugiat nisi",
            "price": 2
          },
          {
            "_id": "5b052ee10fe335a83009a8ea",
            "name": "enim deserunt",
            "price": 3
          },
          {
            "_id": "5b052ee1376f634e6482e653",
            "name": "occaecat nulla",
            "price": 2
          },
          {
            "_id": "5b052ee1fd9cf3020753b378",
            "name": "nulla eiusmod",
            "price": 2
          },
          {
            "_id": "5b052ee1e0bb4f5bb973f386",
            "name": "do cupidatat",
            "price": 0
          }
        ]
      },
      {
        "_id": "5b052ee1b72a119bc02b651e",
        "headline": "veniam sit id",
        "min": 3,
        "max": 0,
        "options": [
          {
            "_id": "5b052ee122b8b2ebd3ffe766",
            "name": "velit elit",
            "price": 2
          },
          {
            "_id": "5b052ee1ec31833049ce8014",
            "name": "dolore proident",
            "price": 3
          },
          {
            "_id": "5b052ee1f8324e79d83feb18",
            "name": "cupidatat pariatur",
            "price": 2
          },
          {
            "_id": "5b052ee1b7245e408f4f048a",
            "name": "eiusmod dolor",
            "price": 2
          },
          {
            "_id": "5b052ee179a40563ee2312fc",
            "name": "Lorem nisi",
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

  itemSelected(item: any, isEditing: boolean) {
    // Setting wether the item is in editing mode
    if (item) {
        item.isEditing = isEditing;
    }

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
