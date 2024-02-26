import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.component';
import { ProgressComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress.component';
import { ProgressBarDirective } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.directive';

@Component({
    selector: 'docs-progress07-example',
    templateUrl: './progress07.component.html',
    standalone: true,
    imports: [
        ProgressBarDirective,
        ProgressComponent,
        ProgressBarComponent,
    ],
})
export class Progress07Component {

  constructor() { }
}
