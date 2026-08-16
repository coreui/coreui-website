import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select06',
  templateUrl: './multi-select06.component.html',
  imports: [ReactiveFormsModule, MultiSelectComponent, MultiSelectOptionComponent, JsonPipe]
})
export class MultiSelect06Component {
  readonly formGroup = new FormGroup({
    multiSelect: new FormControl(['Angular', 'Bootstrap'])
  });
}
