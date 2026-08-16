import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RatingComponent, TemplateIdDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-rating12',
  imports: [IconDirective, RatingComponent, TemplateIdDirective, NgClass],
  templateUrl: './rating12.component.html',
  styleUrl: './rating12.component.scss'
})
export class Rating12Component {
  tooltips = ['Very bad', 'Bad', 'Meh', 'Good', 'Very good'];
  icons = ['cilMoodVeryBad', 'cilMoodBad', 'cilMeh', 'cilMoodGood', 'cilMoodVeryGood'];
  activeIcons = this.icons.map((icon) => `active_${icon}`);
  activeClass = ['text-dark', 'text-danger', 'text-warning', 'text-info', 'text-success'];
  readonly value = signal<number | null>(3);
}
