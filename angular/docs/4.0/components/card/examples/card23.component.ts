import { Component } from '@angular/core';

@Component({
  selector: 'docs-card23',
  templateUrl: './card23.component.html',
})
export class Card23Component {

  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];

  constructor() { }

}
