import { Component } from '@angular/core';
import { CardBodyComponent, CardComponent, CardHeaderComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-card11',
  templateUrl: './card11.component.html',
  styleUrls: ['./card11.component.scss'],
  standalone: true,
  imports: [TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent]
})
export class Card11Component {}
