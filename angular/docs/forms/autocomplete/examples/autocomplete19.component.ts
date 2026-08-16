import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  AutocompleteDirective,
  ButtonDirective,
  ColComponent,
  IAutocompleteOption,
  RowComponent
} from '@coreui/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'docs-autocomplete19',
  imports: [ReactiveFormsModule, AutocompleteDirective, ButtonDirective, RowComponent, ColComponent, JsonPipe],
  template: `
    <form [formGroup]="form">
      @let ctrl = form.controls['framework'];
      <c-row>
        <c-col>
          <label for="framework19">Framework:</label>
          <input
            id="framework19"
            cAutocomplete
            [options]="frameworks"
            formControlName="framework"
            cleaner
            placeholder="Select a framework..."
            [allowOnlyDefinedOptions]="false"
            (visibleChange)="handleVisibleChange($event)"
            (valueChange)="handleValueChange($event)"
            (optionChange)="handleOptionChange($event)"
            (inputChange)="handleInputChange($event)"
            [delay]="300"
          />
        </c-col>
        <c-col>
          <strong>Control state: {{ this.form.get('framework')?.value }}</strong>
          <ul>
            <li>Value: {{ ctrl?.value }}</li>
            <li>Dirty: {{ ctrl?.dirty }}</li>
            <li>Pristine: {{ ctrl?.pristine }}</li>
            <li>Status: {{ ctrl?.status }}</li>
            <li>Touched: {{ ctrl?.touched }}</li>
            <li>Errors: {{ $safeNavigationMigration(ctrl?.errors) | json }}</li>
          </ul>
        </c-col>
      </c-row>
    </form>

    <div class="mt-3">
      <button cButton class="me-1" (click)="changeValue()">"Next.js"</button>
      <button cButton class="me-1" (click)="resetForm()">Reset form</button>
    </div>
  `
})
export class Autocomplete19Component {
  readonly form = new FormGroup({
    framework: new FormControl<string | undefined | null>(
      { value: 'Bootstrap', disabled: false },
      { nonNullable: false, validators: [Validators.required] }
    )
  });

  readonly frameworks = ['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js'];

  protected changeValue() {
    this.form.get('framework')?.setValue('Next.js');
  }

  protected resetForm() {
    // this.form.reset({ framework: 'React.js' });
    // this.form.reset({ framework: '' });
    this.form.reset();
  }

  protected handleVisibleChange($event: boolean) {
    // console.log('handleVisibleChange', $event);
  }

  protected handleValueChange($event: number | string | undefined) {
    console.log('handleValueChange', $event);
  }

  protected handleOptionChange($event: IAutocompleteOption | null) {
    console.log('handleOptionChange', $event);
  }

  protected handleInputChange($event: string) {
    console.log('handleInputChange', $event);
  }
}
