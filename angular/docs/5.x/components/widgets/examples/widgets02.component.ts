import { Component } from '@angular/core';
import {
  ColComponent,
  ProgressBarComponent,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TextColorDirective,
  WidgetStatBComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-widgets02',
  templateUrl: './widgets02.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    WidgetStatBComponent,
    ProgressBarDirective,
    ProgressComponent,
    ProgressBarComponent
  ]
})
export class Widgets02Component {}
