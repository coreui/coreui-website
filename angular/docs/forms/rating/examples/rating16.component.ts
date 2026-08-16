import { Component, computed, model, signal } from '@angular/core';
import { BadgeComponent, RatingComponent } from '@coreui/angular';

@Component({
  selector: 'docs-rating16',
  imports: [RatingComponent, BadgeComponent],
  templateUrl: './rating16.component.html'
})
export class Rating16Component {
  readonly #labels = new Map([
    [1, 'Very bad'],
    [2, 'Bad'],
    [3, 'Meh'],
    [4, 'Good'],
    [5, 'Very good']
  ]);

  readonly currentValue = model(3);
  readonly hoverValue = signal<number | null>(null);
  readonly label = computed(() => this.#labels.get(this.hoverValue() ?? this.currentValue() ?? 0));
}
