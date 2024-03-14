import { Component } from '@angular/core';
import { ProgressBarComponent, ProgressComponent } from '@coreui/angular';

@Component({
  selector: 'docs-progress02-example',
  templateUrl: './progress02.component.html',
  standalone: true,
  imports: [ProgressComponent, ProgressBarComponent]
})
export class Progress02Component {}
