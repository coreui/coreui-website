import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselConfig,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';
import { CarouselCustomConfig } from './carousel.config';

@Component({
  selector: 'docs-carousel03',
  templateUrl: './carousel03.component.html',
  imports: [
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselControlComponent,
    RouterLink
  ],
  providers: [{ provide: CarouselConfig, useClass: CarouselCustomConfig }]
})
export class Carousel03Component implements OnInit {
  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg'
    };
    this.slides[1] = {
      src: './assets/img/react.jpg'
    };
    this.slides[2] = {
      src: './assets/img/vue.jpg'
    };
  }
}
