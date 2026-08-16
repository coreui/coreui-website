import { Component } from '@angular/core';
import { AutocompleteDirective } from '@coreui/angular';

@Component({
  template: ` <input [options]="['Angular', 'Bootstrap', 'Next.js', 'React.js', 'Vue.js']" cAutocomplete /> `,
  imports: [AutocompleteDirective, AutocompleteDirective],
  standalone: true
})
export class CustomAppComponent {}
