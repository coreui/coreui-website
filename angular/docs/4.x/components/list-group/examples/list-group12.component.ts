import { Component } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'docs-list-group12',
  templateUrl: './list-group12.component.html'
})
export class ListGroup12Component {

  checkBoxes = this.formBuilder.group({
    one: false,
    two: false,
    three: true,
    four: true,
    five: {value: false, disabled: true}
  });

  constructor(
    private formBuilder: UntypedFormBuilder
  ) { }

  setValue(controlName: string) {
    const prevValue = this.checkBoxes.get(controlName)?.value;
    const value = this.checkBoxes.getRawValue();
    value[controlName] = !prevValue;
    this.checkBoxes.setValue(value);
  }

  logValue() {
    console.log(this.checkBoxes.value);
    this.checkBoxes.reset();
  }
}
