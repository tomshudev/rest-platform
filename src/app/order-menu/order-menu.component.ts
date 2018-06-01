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
  selectedItem = null;

  constructor(private dataService: DataService, private modalService: ItemModalService) { 
    this.categories = this.dataService.getData();
    this.modalService.subscribe(this);
  }

  itemSelected(item: any, isEditing: boolean) {
    // Setting wether the item is in editing mode
    if (item) {
        item.isEditing = isEditing;

        setTimeout(() => {
          $('app-order-menu-item-modal').addClass('item-modal__visible');
          $('app-order-menu-item-modal').removeClass('item-modal__hidden');
        }, 0);

        this.selectedItem = item;
    } else {
      
      $('app-order-menu-item-modal').removeClass('item-modal__visible');
      $('app-order-menu-item-modal').addClass('item-modal__hidden');

      // Waiting in order to display the animations
      setTimeout(() => {
        this.selectedItem = item;
      }, 200);
    }
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

                if ($(`#chooser-${elem.attr('id')}`).offset()) { 
                    $('.category-chooser').animate({ scrollTop: $(`#chooser-${elem.attr('id')}`).offset().top - $('.category-chooser').offset().top + $('.category-chooser').scrollTop() - 20 }, 0);
                }
            }
        })
    });
  }

}
