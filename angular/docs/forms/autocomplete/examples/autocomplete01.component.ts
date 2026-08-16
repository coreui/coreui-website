import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteDirective, AutocompleteOption, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-autocomplete01',
  imports: [AutocompleteDirective, ReactiveFormsModule, FormLabelDirective],
  templateUrl: './autocomplete01.component.html'
})
export class Autocomplete01Component {
  readonly options: AutocompleteOption[] = ['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js'];
}
