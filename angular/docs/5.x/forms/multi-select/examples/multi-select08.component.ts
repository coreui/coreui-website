import { Component } from '@angular/core';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select08',
  templateUrl: './multi-select08.component.html',
  standalone: true,
  imports: [MultiSelectComponent, MultiSelectOptionComponent]
})
export class MultiSelect08Component {}
