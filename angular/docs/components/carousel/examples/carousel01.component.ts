import { Component, OnInit } from '@angular/core';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent } from '@coreui/angular';

@Component({
  selector: 'docs-carousel01',
  templateUrl: './carousel01.component.html',
  imports: [CarouselComponent, CarouselInnerComponent, CarouselItemComponent]
})
export class Carousel01Component implements OnInit {
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

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
