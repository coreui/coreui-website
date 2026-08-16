import { Component } from '@angular/core';
import { ProgressComponent, ProgressStackedComponent } from '@coreui/angular';

@Component({
  selector: 'docs-progress05-example',
  templateUrl: './progress05.component.html',
  imports: [ProgressComponent, ProgressStackedComponent]
})
export class Progress05Component {}
