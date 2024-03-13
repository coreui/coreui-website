import { Component } from '@angular/core';
import { cilArrowRight, cilChartPie } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ColComponent, RowComponent, TemplateIdDirective, WidgetStatFComponent } from '@coreui/angular';

@Component({
  selector: 'docs-widgets06',
  templateUrl: './widgets06.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    WidgetStatFComponent,
    TemplateIdDirective,
    IconDirective
  ]
})
export class Widgets06Component {

  icons = { cilChartPie, cilArrowRight };

}
