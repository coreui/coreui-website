import { Component } from '@angular/core';
import { ProgressBarComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.component';
import { ProgressComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress.component';
import { ProgressBarDirective } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.directive';

@Component({
    selector: 'docs-progress08-example',
    templateUrl: './progress08.component.html',
    styleUrls: ['./progress08.component.scss'],
    standalone: true,
    imports: [ProgressBarDirective, ProgressComponent, ProgressBarComponent]
})
export class Progress08Component {

  constructor() { }
}
