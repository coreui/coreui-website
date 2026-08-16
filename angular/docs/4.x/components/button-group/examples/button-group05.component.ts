import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'docs-button-group05-example',
  templateUrl: './button-group05.component.html',
})
export class ButtonGroup05Component {

  formCheck1 = this.formBuilder.group({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  setCheckBoxValue(controlName: string) {
    const prevValue = this.formCheck1.get(controlName)?.value;
    const value = this.formCheck1.value;
    value[controlName] = !prevValue;
    this.formCheck1.setValue(value);
  }
}
