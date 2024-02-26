import { Component } from '@angular/core';
import { cilChartPie, cilArrowRight } from '@coreui/icons';
import { IconDirective } from '../../../../../../../coreui-icons-angular/src/lib/icon/icon.directive';
import { TemplateIdDirective } from '../../../../../../../coreui-angular/src/lib/shared/template-id.directive';
import { WidgetStatFComponent } from '../../../../../../../coreui-angular/src/lib/widget/widget-stat-f/widget-stat-f.component';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';

@Component({
    selector: 'docs-widgets06',
    templateUrl: './widgets06.component.html',
    standalone: true,
    imports: [
        RowComponent,
        ColComponent,
        WidgetStatFComponent,
        TemplateIdDirective,
        IconDirective,
    ],
})
export class Widgets06Component {

  icons = { cilChartPie, cilArrowRight };

}
