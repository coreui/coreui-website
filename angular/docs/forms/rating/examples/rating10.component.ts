import { Component } from '@angular/core';
import { RatingComponent, TemplateIdDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-rating10',
  imports: [RatingComponent, TemplateIdDirective, IconDirective],
  templateUrl: './rating10.component.html',
  styleUrl: './rating10.component.scss'
})
export class Rating10Component {}
