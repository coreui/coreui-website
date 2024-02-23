import { Component, OnInit } from '@angular/core';
import { CarouselItemComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-item/carousel-item.component';
import { NgFor } from '@angular/common';
import { CarouselInnerComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel-inner/carousel-inner.component';
import { CarouselComponent } from '../../../../../../../coreui-angular/src/lib/carousel/carousel/carousel.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-carousel01',
    templateUrl: './carousel01.component.html',
    styleUrls: ['./carousel01.component.scss'],
    standalone: true,
    imports: [ThemeDirective, CarouselComponent, CarouselInnerComponent, NgFor, CarouselItemComponent]
})
export class Carousel01Component implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() {}

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

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
