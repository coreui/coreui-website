import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CarouselComponent,
  CarouselControlComponent,
  CarouselInnerComponent,
  CarouselItemComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-carousel02',
  templateUrl: './carousel02.component.html',
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent, CarouselControlComponent, RouterLink]
})
export class Carousel02Component implements OnInit {
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
