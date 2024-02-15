import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'docs-multi-select06',
  templateUrl: './multi-select06.component.html'
})
export class MultiSelect06Component {

  formGroup = new FormGroup({
    multiSelect: new FormControl(['Angular', 'Bootstrap'])
  });
}
