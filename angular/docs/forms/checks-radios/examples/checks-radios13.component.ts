import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'docs-checks-radios13',
  templateUrl: './checks-radios13.component.html',
  styleUrls: ['./checks-radios13.component.scss']
})
export class ChecksRadios13Component {
  btnCheckGroup = this.formBuilder.group({
    checkbox1: [true],
    checkbox2: [false],
    checkbox3: [{ value: false, disabled: true }]
  });

  constructor(private formBuilder: UntypedFormBuilder) {}

  setValue(controlName: string) {
    const prevValue = this.btnCheckGroup.get(controlName)?.value;
    const groupValue = this.btnCheckGroup.getRawValue();
    const newGroupValue = { ...groupValue, [`${controlName}`]: !prevValue };
    this.btnCheckGroup.setValue(newGroupValue);
  }
}
