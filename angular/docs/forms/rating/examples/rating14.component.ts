import { Component, signal } from '@angular/core';
import { RatingComponent } from '@coreui/angular';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'docs-rating14',
  imports: [FormsModule, JsonPipe, RatingComponent],
  templateUrl: './rating14.component.html'
})
export class Rating14Component {
  readonly rating = signal<number | null>(3);
}
