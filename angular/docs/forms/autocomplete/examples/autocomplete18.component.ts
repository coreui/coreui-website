import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteDirective, ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-autocomplete18',
  imports: [AutocompleteDirective, ReactiveFormsModule, JsonPipe, FormsModule, RowComponent, ColComponent],
  template: `
    <form #form="ngForm">
      <c-row>
        <c-col>
          <input
            [(ngModel)]="value"
            [options]="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']"
            cAutocomplete
            cleaner
            name="templateCtrl"
          />
        </c-col>
        <c-col>
          <ul>
            <li>Form value: {{ form.value | json }}</li>
            <li>value: {{ value() }}</li>
          </ul>
        </c-col>
      </c-row>
    </form>
  `
})
export class Autocomplete18Component {
  readonly value = signal('Angular');
}
