import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
declare var $:any;

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
      $(window).scroll(() => {
        var scrollTop = $(window).scrollTop();

        // If the scrolling top has enterd into the menu - set the needed parts as fixed,
        // Otherwise, set it as normal without fixed position
        if ($('#menu-div').position().top <= scrollTop) {
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
