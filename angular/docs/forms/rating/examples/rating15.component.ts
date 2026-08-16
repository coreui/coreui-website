import { Component, signal } from '@angular/core';
import { ButtonDirective, RatingComponent } from '@coreui/angular';

@Component({
  selector: 'docs-rating15',
  imports: [RatingComponent, ButtonDirective],
  templateUrl: './rating15.component.html'
})
export class Rating15Component {
  readonly value = signal<number | null>(3);
}
