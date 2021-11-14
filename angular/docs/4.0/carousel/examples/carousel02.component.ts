import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-carousel02',
  templateUrl: './carousel02.component.html',
  styleUrls: ['./carousel02.component.scss']
})
export class Carousel02Component implements OnInit {

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
