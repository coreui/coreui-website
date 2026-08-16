import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RatingComponent } from '@coreui/angular';

@Component({
  selector: 'docs-rating01',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './rating01.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rating01Component {}
