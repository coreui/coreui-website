import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'docs-checks-radios15',
  templateUrl: './checks-radios15.component.html',
  styleUrls: ['./checks-radios15.component.scss']
})
export class ChecksRadios15Component {

  btnRadioGroup2 = this.formBuilder.group({
    radio2: this.formBuilder.control({ value: 'Radio2' })
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  setRadioValue(value: string): void {
    this.btnRadioGroup2.setValue({ radio2: value });
  }
}
