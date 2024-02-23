import { Component } from '@angular/core';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select03',
  templateUrl: './multi-select03.component.html',
  standalone: true,
  imports: [MultiSelectComponent, MultiSelectOptionComponent]
})
export class MultiSelect03Component {}
