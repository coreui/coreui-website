import { Component } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios15',
  templateUrl: './checks-radios15.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ReactiveFormsModule, FormCheckLabelDirective, ButtonDirective]
})
export class ChecksRadios15Component {

  btnRadioGroup2 = this.formBuilder.group({
    radio2: new FormControl('Radio2')
  });

  constructor(
    private formBuilder: FormBuilder
  ) {}

  setRadioValue(value: string): void {
    this.btnRadioGroup2.setValue({ radio2: value });
  }
}
