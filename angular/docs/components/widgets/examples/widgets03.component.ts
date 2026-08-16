import { Component, inject } from '@angular/core';
import {
  ColComponent,
  ProgressComponent,
  RowComponent,
  TemplateIdDirective,
  WidgetStatCComponent
} from '@coreui/angular';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { cilChartPie } from '@coreui/icons';

@Component({
  selector: 'docs-widgets03',
  templateUrl: './widgets03.component.html',
  imports: [RowComponent, ColComponent, WidgetStatCComponent, TemplateIdDirective, IconDirective, ProgressComponent]
})
export class Widgets03Component {
  public iconSet = inject(IconSetService);
  constructor() {
    this.iconSet.icons = {
      cilChartPie
    };
  }
}
