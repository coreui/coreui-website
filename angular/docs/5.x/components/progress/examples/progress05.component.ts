import { Component } from '@angular/core';
import { ProgressBarComponent, ProgressComponent, ProgressStackedComponent } from '@coreui/angular';

@Component({
  selector: 'docs-progress05-example',
  templateUrl: './progress05.component.html',
  standalone: true,
  imports: [ProgressComponent, ProgressBarComponent, ProgressStackedComponent]
})
export class Progress05Component {}
