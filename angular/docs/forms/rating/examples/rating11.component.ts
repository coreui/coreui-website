import { Component } from '@angular/core';
import { RatingComponent, TemplateIdDirective } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'docs-rating11',
  imports: [RatingComponent, TemplateIdDirective, IconModule],
  templateUrl: './rating11.component.html',
  styleUrl: './rating11.component.scss'
})
export class Rating11Component {}
