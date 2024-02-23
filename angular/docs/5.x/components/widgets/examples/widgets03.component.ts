import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.component';
import { ProgressComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress.component';
import { ProgressBarDirective } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.directive';
import { IconDirective } from '../../../../../../../coreui-icons-angular/src/lib/icon/icon.directive';
import { TemplateIdDirective } from '../../../../../../../coreui-angular/src/lib/shared/template-id.directive';
import { WidgetStatCComponent } from '../../../../../../../coreui-angular/src/lib/widget/widget-stat-c/widget-stat-c.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';

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
        ProgressBarComponent,
    ],
})
export class Widgets03Component { }

