import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.component';
import { ProgressComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress.component';
import { ProgressBarDirective } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.directive';
import { WidgetStatBComponent } from '../../../../../../../coreui-angular/src/lib/widget/widget-stat-b/widget-stat-b.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { ColComponent } from '../../../../../../../coreui-angular/src/lib/grid/col.component';
import { RowComponent } from '../../../../../../../coreui-angular/src/lib/grid/row.component';

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
        ProgressBarComponent,
    ],
})
export class Widgets02Component { }
