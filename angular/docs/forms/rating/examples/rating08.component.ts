import { Component, signal } from '@angular/core';
import { RatingComponent } from '@coreui/angular';

@Component({
  selector: 'docs-rating08',
  imports: [RatingComponent],
  templateUrl: './rating08.component.html',
  styleUrl: './rating08.component.scss'
})
export class Rating08Component {
  readonly value = signal(3);
}
