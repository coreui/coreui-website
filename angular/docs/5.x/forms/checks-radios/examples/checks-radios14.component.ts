import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective, ButtonGroupComponent, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios14',
  templateUrl: './checks-radios14.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ReactiveFormsModule, FormCheckLabelDirective, ButtonDirective]
})
export class ChecksRadios14Component {

  btnRadioGroup = new FormGroup(
    { radio1: new FormControl('Radio2') }
  );

  setRadioValue(value: string): void {
    this.btnRadioGroup.setValue({ radio1: value });
  }
}
