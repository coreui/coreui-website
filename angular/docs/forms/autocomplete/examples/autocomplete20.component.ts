import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AutocompleteDirective,
  ButtonDirective,
  ColComponent,
  IAutocompleteOption,
  RowComponent
} from '@coreui/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'docs-autocomplete20',
  imports: [AutocompleteDirective, ButtonDirective, JsonPipe, FormsModule, RowComponent, ColComponent],
  template: `
    <hr />
    <form #form="ngForm">
      @let ctrl = form.control;
      <c-row>
        <c-col>
          <label for="framework20">Framework:</label>
          <input
            id="framework20"
            [(value)]="value"
            [options]="frameworks"
            cAutocomplete
            cleaner
            name="autocompleteCtrl"
            required
            (visibleChange)="handleVisibleChange($event)"
            (valueChange)="handleValueChange($event)"
            (optionChange)="handleOptionChange($event)"
            (inputChange)="handleInputChange($event)"
            [delay]="300"
          />
        </c-col>
        <c-col>
          <strong>Control state: {{ value() | json }}</strong>
          <ul>
            <li>Value: {{ $safeNavigationMigration(ctrl?.value) | json }}</li>
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
      <button cButton class="me-1" (click)="resetForm(); form.reset({ autocompleteCtrl: 'Bootstrap' })">
        Reset form
      </button>
    </div>
  `
})
export class Autocomplete20Component {
  readonly value = signal<string | number | undefined>('Angular');

  readonly frameworks = ['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js'];

  protected changeValue() {
    this.value.set('Next.js');
  }

  protected resetForm() {
    this.value.set('');
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
