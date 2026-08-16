import { Component } from '@angular/core';
import { CardComponent, CardHeaderComponent, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-card06',
  templateUrl: './card06.component.html',
  styleUrls: ['./card01.component.scss'],
  imports: [CardComponent, CardHeaderComponent, ListGroupDirective, ListGroupItemDirective]
})
export class Card06Component {}
