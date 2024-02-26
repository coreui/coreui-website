import { Component } from '@angular/core';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select04',
  templateUrl: './multi-select04.component.html',
  standalone: true,
  imports: [MultiSelectComponent, MultiSelectOptionComponent]
})
export class MultiSelect04Component {}
