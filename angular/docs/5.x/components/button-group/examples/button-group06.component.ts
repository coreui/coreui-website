import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-button-group06-example',
  templateUrl: './button-group06.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonGroupComponent,
    FormCheckLabelDirective,
    ButtonDirective
  ]
})
export class ButtonGroup06Component {

  formRadio1 = new UntypedFormGroup({
    radio1: new UntypedFormControl('Radio1')
  });

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  setRadioValue(value: string): void {
    this.formRadio1.setValue({ radio1: value });
  }
}
