import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'docs-multi-select06',
  templateUrl: './multi-select06.component.html'
})
export class MultiSelect06Component {

  formGroup = new UntypedFormGroup({
    multiSelect: new UntypedFormControl(['Angular', 'Bootstrap'])
  });
}
