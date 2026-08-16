import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, map } from 'rxjs/operators';
import {
  AutocompleteDirective,
  ButtonDirective,
  ColComponent,
  IAutocompleteOption,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-autocomplete17',
  imports: [AutocompleteDirective, ReactiveFormsModule, JsonPipe, ButtonDirective, ColComponent, RowComponent],
  templateUrl: './autocomplete17.component.html'
})
export class Autocomplete17Component {
  readonly formGroup = new FormGroup({
    framework: new FormControl<string | null>('React.js', { nonNullable: true })
  });

  constructor() {
    this.formGroup.valueChanges
      .pipe(
        map((value) => value.framework),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        console.log('* Value changed: ', value);
        console.log('* Control dirty: ', this.formGroup.get('framework')?.dirty);
        console.log('* Control pristine: ', this.formGroup.get('framework')?.pristine);
        console.log('* Control touched: ', this.formGroup.get('framework')?.touched);
      });
  }

  resetForm() {
    // console.log('Before reset - dirty:', this.formGroup.get('framework')?.dirty);
    // console.log('Before reset - pristine:', this.formGroup.get('framework')?.pristine);
    // console.log('Before reset - touched:', this.formGroup.get('framework')?.touched);
    this.formGroup.reset({ framework: '' });
    // console.log('After reset - dirty:', this.formGroup.get('framework')?.dirty);
    // console.log('After reset - pristine:', this.formGroup.get('framework')?.pristine);
    // console.log('After reset - touched:', this.formGroup.get('framework')?.touched);
  }

  protected changeValue() {
    this.formGroup.get('framework')?.setValue('Angular');
  }

  handleOptionChange($event: IAutocompleteOption | null) {
    console.log('* handleOptionChange: ', $event);
  }

  handleValueChange($event: string | number | null | undefined) {
    console.log('* handleValueChange: ', $event);
  }

  handleInputChange($event: any) {
    console.log('* handleInputChange: ', `*${$event}*`, typeof $event);
  }
}
