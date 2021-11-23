import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-card29',
  templateUrl: './card29.component.html',
})
export class Card29Component implements OnInit {

  cards = new Array(4).fill({body: ''});

  ngOnInit(): void {
    this.cards[0] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
    this.cards[1] = { body: 'This card has supporting text below as a natural lead-in to additional content.'}
    this.cards[2] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'}
    this.cards[3] = { body: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'}
  }
}
