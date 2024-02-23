import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselControlComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-control/carousel-control.component';
import { CarouselCaptionComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-caption/carousel-caption.component';
import { CarouselItemComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-item/carousel-item.component';
import { NgFor } from '@angular/common';
import { CarouselInnerComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-inner/carousel-inner.component';
import { CarouselIndicatorsComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-indicators/carousel-indicators.component';
import { CarouselComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel/carousel.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-carousel06',
    templateUrl: './carousel06.component.html',
    styleUrls: ['./carousel06.component.scss'],
    standalone: true,
    imports: [ThemeDirective, CarouselComponent, CarouselIndicatorsComponent, CarouselInnerComponent, NgFor, CarouselItemComponent, CarouselCaptionComponent, CarouselControlComponent, RouterLink]
})
export class Carousel06Component implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/img/angular.jpg',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/img/react.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/img/vue.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }
}
