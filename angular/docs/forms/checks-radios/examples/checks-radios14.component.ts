import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'docs-checks-radios14',
  templateUrl: './checks-radios14.component.html',
  imports: [ButtonGroupComponent, ReactiveFormsModule, JsonPipe, ButtonDirective, FormCheckLabelDirective]
})
export class ChecksRadios14Component {
  radioOptions = [
    { value: 'radio1', label: 'Radio 1' },
    { value: 'radio2', label: 'Radio 2' },
    { value: 'radio3', label: 'Radio 3', disabled: true }
  ];

  readonly btnRadioGroup = new FormGroup({
    radioToggle: new FormControl('radio1')
  });

  setRadioValue(value: string): void {
    this.btnRadioGroup.setValue({ radioToggle: value });
  }
}
