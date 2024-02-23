import { Component } from '@angular/core';
import { SpinnerComponent } from '../../../../../../../coreui-angular/src/lib/spinner/spinner.component';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-spinner07',
    templateUrl: './spinner07.component.html',
    standalone: true,
    imports: [ButtonDirective, SpinnerComponent]
})
export class Spinner07Component {
}
