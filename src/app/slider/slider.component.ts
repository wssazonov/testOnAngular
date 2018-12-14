import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {

  images = [
    'https://picsum.photos/900/500?random&t=0.3698462564578735',
    'http://worldpag.com/wp-content/uploads/2018/03/123.jpg',
    'https://cdn-images-1.medium.com/max/1500/1*uIwQid0Hjo5D6fccoTMhIQ.jpeg',
    'https://picsum.photos/900/500?random&t=0.5698462564578735'
  ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}
