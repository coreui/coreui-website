import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-button-group13-example',
  templateUrl: './button-group13.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonGroupComponent,
    FormCheckLabelDirective,
    ButtonDirective
  ]
})
export class ButtonGroup13Component {

  formRadio1 = new FormGroup({
    radio1: new FormControl('Radio1')
  });

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  setRadioValue(value: string): void {
    this.formRadio1.setValue({ radio1: value });
  }
}
