import { Component } from '@angular/core';

@Component({
  selector: 'docs-card24',
  templateUrl: './card24.component.html',
  styleUrls: ['./card24.component.scss']
})
export class Card24Component {

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
