import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios13',
  templateUrl: './checks-radios13.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonGroupComponent, FormCheckLabelDirective, ButtonDirective]
})
export class ChecksRadios13Component {
  btnCheckGroup = this.formBuilder.group({
    checkbox1: [true],
    checkbox2: [false],
    checkbox3: [{ value: false, disabled: true }]
  });

  constructor(private formBuilder: FormBuilder) {}

  setValue(controlName: string) {
    const prevValue = this.btnCheckGroup.get(controlName)?.value;
    const groupValue = this.btnCheckGroup.getRawValue();
    const newGroupValue = { ...groupValue, [`${controlName}`]: !prevValue };
    this.btnCheckGroup.setValue(newGroupValue);
  }
}
