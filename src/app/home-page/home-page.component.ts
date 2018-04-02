import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

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
        var imgWidth = $('.slideshow').width();

        var imagesCount = images.length;
        var currImage = 1;
        var lastElem = imagesCount;

        function sliderResponse(prevImage, currImage) {
            $(`.slideshow__photo--${currImage}`).animate({ left: `0`}, 1000);
            $(`.slideshow__photo--${prevImage}`).animate({ left: `-${imgWidth}px`}, 1000, function () {
                $(`.slideshow__photo--${prevImage}`).css({ left: `100%`});
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
