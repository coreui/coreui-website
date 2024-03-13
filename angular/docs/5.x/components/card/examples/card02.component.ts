import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-card02',
  templateUrl: './card02.component.html',
  styleUrls: ['./card02.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardBodyComponent]
})
export class Card02Component {}
