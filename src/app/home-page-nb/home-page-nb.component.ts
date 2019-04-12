import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home-page-nb',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageNBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $(document).ready(function () {
        // $(".slideshow > div:gt(0)").hide();

        // setInterval(function() { 
        //   $('.slideshow > div:first')
        //     .animate({ left: "-5rem" }, 2000)
        //     .next()
        //     .animate({ left: "-5rem" }, 2000)
        //     .fadeIn(2000)
        //     .end()
        //     .appendTo('.slideshow');
        // },  5000);

        var images = $('.slideshow__photo');
        var imgWidth = $('.slideshow__photo').height();

        var imagesCount = images.length;
        var currImage = 1;
        var lastElem = imagesCount;

        function sliderResponse(prevImage, currImage) {
            $(`.slideshow__photo--${currImage}`).animate({ bottom: `0`}, 1000);
            $(`.slideshow__photo--${prevImage}`).animate({ bottom: `-${imgWidth}px`}, 1000, function () {
                $(`.slideshow__photo--${prevImage}`).css({ bottom: `100%`});
            });
        }

        function sliderTiming() {
          var prevImage = currImage;
          currImage === lastElem ? currImage = 1 : currImage = currImage + 1;

          sliderResponse(prevImage, currImage);
        }
        var timingRun = setInterval(function() { sliderTiming(); },5000);
        function resetTiming() {
            clearInterval(timingRun);
            timingRun = setInterval(function() { sliderTiming(); },5000);
        }
      })
  }

}
