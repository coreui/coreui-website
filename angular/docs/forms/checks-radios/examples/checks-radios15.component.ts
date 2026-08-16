import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios15',
  templateUrl: './checks-radios15.component.html',
  imports: [ButtonGroupComponent, ReactiveFormsModule, FormCheckLabelDirective, ButtonDirective]
})
export class ChecksRadios15Component {
  readonly formBuilder = inject(FormBuilder);

  readonly btnRadioGroup2 = this.formBuilder.group({
    radio2: new FormControl('Radio2')
  });

  setRadioValue(value: string): void {
    this.btnRadioGroup2.setValue({ radio2: value });
  }
}
