import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios17',
  templateUrl: './checks-radios17.component.html',
  imports: [
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ]
})
export class ChecksRadios17Component {
  readonly radios = ['one', 'two', 'three'];

  readonly formGroup = new FormGroup({
    radioOne: new FormControl<string | null>(this.radios[0])
  });

  radioTwo: string = this.radios[1];
}
