import { Component } from '@angular/core';
import {
  MultiSelectComponent,
  MultiSelectOptgroupComponent,
  MultiSelectOptgroupLabelComponent,
  MultiSelectOptionComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-multi-select01',
  templateUrl: './multi-select01.component.html',
  imports: [
    MultiSelectComponent,
    MultiSelectOptionComponent,
    MultiSelectOptgroupComponent,
    MultiSelectOptgroupLabelComponent
  ]
})
export class MultiSelect01Component {}
