import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'docs-checks-radios14',
  templateUrl: './checks-radios14.component.html',
  styleUrls: ['./checks-radios14.component.scss']
})
export class ChecksRadios14Component {

  btnRadioGroup = this.formBuilder.group({
    radio1: this.formBuilder.control({ value: 'Radio2' })
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  setRadioValue(value: string): void {
    this.btnRadioGroup.setValue({ radio1: value });
  }
}
