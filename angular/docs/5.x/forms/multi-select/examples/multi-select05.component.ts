import { Component } from '@angular/core';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select05',
  templateUrl: './multi-select05.component.html',
  standalone: true,
  imports: [MultiSelectComponent, MultiSelectOptionComponent]
})
export class MultiSelect05Component {}
