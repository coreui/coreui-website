import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselControlComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-control/carousel-control.component';
import { CarouselItemComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-item/carousel-item.component';
import { NgFor } from '@angular/common';
import { CarouselInnerComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-inner/carousel-inner.component';
import { CarouselIndicatorsComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-indicators/carousel-indicators.component';
import { CarouselComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel/carousel.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-carousel03',
    templateUrl: './carousel03.component.html',
    styleUrls: ['./carousel03.component.scss'],
    standalone: true,
    imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselControlComponent, RouterLink]
})
export class Carousel03Component implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    }
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    }
  }
}
