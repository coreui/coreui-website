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
  selector: 'docs-validation02',
  templateUrl: './validation02.component.html',
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
export class Validation02Component {
  readonly browserDefaultsValidated = signal(false);

  onSubmit2() {
    this.browserDefaultsValidated.set(true);
    console.log('Submit... 2');
  }

  onReset2() {
    this.browserDefaultsValidated.set(false);
    console.log('Reset... 3');
  }
}
