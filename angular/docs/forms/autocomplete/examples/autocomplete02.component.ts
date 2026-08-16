import { Component } from '@angular/core';
import { AutocompleteDirective, AutocompleteOption, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-autocomplete02',
  imports: [AutocompleteDirective, FormLabelDirective],
  templateUrl: './autocomplete02.component.html'
})
export class Autocomplete02Component {
  readonly options: AutocompleteOption[] = [
    {
      label: 'Angular',
      value: 1
    },
    {
      label: 'Bootstrap',
      value: 2
    },
    {
      label: 'Next.js',
      value: 3
    },
    {
      label: 'React.js',
      value: 4
    },
    {
      label: 'Vue.js',
      value: 5
    }
  ];
}
