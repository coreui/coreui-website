import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select06',
  templateUrl: './multi-select06.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, MultiSelectComponent, MultiSelectOptionComponent, JsonPipe]
})
export class MultiSelect06Component {

  formGroup = new FormGroup({
    multiSelect: new FormControl(['Angular', 'Bootstrap'])
  });
}
