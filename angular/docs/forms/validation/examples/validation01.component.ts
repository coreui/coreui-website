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
  GutterDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  RowDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-validation01',
  templateUrl: './validation01.component.html',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    RowDirective,
    GutterDirective,
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
export class Validation01Component {
  readonly customStylesValidated = signal(false);

  onSubmit1() {
    this.customStylesValidated.set(true);
    console.log('Submit... 1');
  }

  onReset1() {
    this.customStylesValidated.set(false);
    console.log('Reset... 1');
  }
}
