import { Component } from '@angular/core';
import {
  ColComponent,
  ProgressBarComponent,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TemplateIdDirective,
  TextColorDirective,
  WidgetStatCComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-widgets03',
  templateUrl: './widgets03.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TextColorDirective,
    WidgetStatCComponent,
    TemplateIdDirective,
    IconDirective,
    ProgressBarDirective,
    ProgressComponent,
    ProgressBarComponent
  ]
})
export class Widgets03Component {}

