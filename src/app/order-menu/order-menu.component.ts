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
