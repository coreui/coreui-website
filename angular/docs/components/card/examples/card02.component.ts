import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent } from '@coreui/angular';

@Component({
  selector: 'docs-card02',
  templateUrl: './card02.component.html',
  imports: [CardComponent, CardBodyComponent]
})
export class Card02Component {}
