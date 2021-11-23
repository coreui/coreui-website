import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'docs-button-group06-example',
  templateUrl: './button-group06.component.html',
})
export class ButtonGroup06Component {

  formRadio1 = new FormGroup({
    radio1: new FormControl('Radio1')
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  setRadioValue(value: string): void {
    this.formRadio1.setValue({ radio1: value });
  }
}
