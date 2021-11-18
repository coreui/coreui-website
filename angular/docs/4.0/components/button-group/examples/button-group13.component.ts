import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'docs-button-group13-example',
  templateUrl: './button-group13.component.html',
})
export class ButtonGroup13Component {

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
