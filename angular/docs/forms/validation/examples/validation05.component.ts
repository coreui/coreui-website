import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonDirective,
  ColComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormLabelDirective,
  FormSelectDirective,
  InputGroupComponent,
  InputGroupTextDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-validation05',
  templateUrl: './validation05.component.html',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    ColComponent,
    FormLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    ButtonDirective
  ]
})
export class Validation05Component {
  readonly tooltipValidated = signal(false);

  onSubmit3() {
    this.tooltipValidated.set(true);
    console.log('Submit... 3');
  }

  onReset3() {
    this.tooltipValidated.set(false);
    console.log('Reset... 3');
  }
}
