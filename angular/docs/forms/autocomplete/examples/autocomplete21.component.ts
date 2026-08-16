import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import {
  AutocompleteDirective,
  ButtonDirective,
  ColComponent,
  FormFeedbackComponent,
  IAutocompleteOption,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-autocomplete21',
  imports: [
    AutocompleteDirective,
    ButtonDirective,
    ColComponent,
    FormFeedbackComponent,
    FormField,
    FormRoot,
    RowComponent,
    JsonPipe
  ],
  template: `
    <form [formRoot]="frameworkForm">
      <c-row>
        <c-col>
          <label for="framework21">Framework:</label>
          @let ctrlState = frameworkForm.framework();
          <input
            (inputChange)="handleInputChange($event)"
            (optionChange)="handleOptionChange($event)"
            (valueChange)="handleValueChange($event)"
            [delay]="300"
            [formField]="frameworkForm.framework"
            [options]="frameworks"
            [valid]="
              ctrlState.touched() && ctrlState.invalid()
                ? false
                : ctrlState.touched() && !ctrlState.invalid()
                  ? true
                  : undefined
            "
            allowOnlyDefinedOptions
            cAutocomplete
            cleaner
            id="framework21"
            showHints
          />
          @if (ctrlState.touched() && ctrlState.invalid()) {
            @for (error of ctrlState.errors(); track error.kind) {
              @if (error.kind === 'required') {
                <c-form-feedback [valid]="false">
                  {{ error.message }}
                </c-form-feedback>
              }
            }
          }
          <div class="mt-3">
            <button type="button" cButton class="me-1" (click)="changeValue()">Change</button>
            <button type="reset" cButton class="me-1" (click)="resetForm()">Reset</button>
          </div>
        </c-col>
        <c-col>
          <strong>Control state: </strong>
          <ul>
            <li>Value: {{ frameworkForm.framework().value() | json }}</li>
            <li>Dirty: {{ frameworkForm.framework().dirty() }}</li>
            <li>Touched: {{ frameworkForm.framework().touched() }}</li>
            <li>Errors: {{ frameworkForm.framework().errors() | json }}</li>
          </ul>
        </c-col>
      </c-row>
    </form>
  `
})
export class Autocomplete21Component {
  readonly frameworkModel = signal({ framework: '' });

  readonly frameworkForm = form(this.frameworkModel, (schemaPath) => {
    required(schemaPath.framework, { message: 'framework is required' });
  });

  readonly frameworks = ['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js'];

  protected changeValue() {
    this.frameworkModel.set({ framework: 'Next.js' });
  }

  protected resetForm() {
    this.frameworkForm().reset({ framework: '' });
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
