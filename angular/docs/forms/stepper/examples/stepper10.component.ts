import { Component, inject } from '@angular/core';
import { StepperComponent, StepperStepComponent } from '@coreui/angular';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { cilExitToApp, cilPen, cilSend, cilUser } from '@coreui/icons';

@Component({
  selector: 'docs-stepper10',
  imports: [StepperComponent, IconDirective, StepperStepComponent],
  templateUrl: './stepper10.component.html',
  providers: [IconSetService]
})
export class Stepper10Component {
  readonly iconSet = inject(IconSetService);

  constructor() {
    this.iconSet.icons = {
      cilExitToApp,
      cilSend,
      cilPen,
      cilUser
    };
  }
}
