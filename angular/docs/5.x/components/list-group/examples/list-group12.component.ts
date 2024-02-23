import { Component } from '@angular/core';
import { UntypedFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { FormCheckLabelDirective } from '../../../../../../../coreui-angular/src/lib/form/form-check/form-check-label.directive';
import { FormCheckInputDirective } from '../../../../../../../coreui-angular/src/lib/form/form-check/form-check-input.directive';
import { FormCheckComponent } from '../../../../../../../coreui-angular/src/lib/form/form-check/form-check.component';
import { ListGroupItemDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group-item.directive';
import { ListGroupDirective } from '../../../../../../../coreui-angular/src/lib/list-group/list-group.directive';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';

@Component({
    selector: 'docs-list-group12',
    templateUrl: './list-group12.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, FormDirective, ListGroupDirective, ListGroupItemDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, ButtonDirective]
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
