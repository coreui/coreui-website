import { Component } from '@angular/core';
import { MultiSelectComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select10',
  templateUrl: './multi-select10.component.html',
  standalone: true,
  imports: [MultiSelectComponent, MultiSelectOptionComponent]
})
export class MultiSelect10Component {}
