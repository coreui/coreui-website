import { Component } from '@angular/core';
import { ProgressBarComponent, ProgressComponent } from '@coreui/angular';

@Component({
  selector: 'docs-progress04-example',
  templateUrl: './progress04.component.html',
  standalone: true,
  imports: [ProgressComponent, ProgressBarComponent]
})
export class Progress04Component {}
