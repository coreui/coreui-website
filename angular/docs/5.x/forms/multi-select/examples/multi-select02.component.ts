import { Component } from '@angular/core';
import { MultiSelectComponent, MultiSelectOptgroupComponent, MultiSelectOptionComponent } from '@coreui/angular';

@Component({
  selector: 'docs-multi-select02',
  templateUrl: './multi-select02.component.html',
  standalone: true,
  imports: [
    MultiSelectComponent,
    MultiSelectOptionComponent,
    MultiSelectOptgroupComponent
  ]
})
export class MultiSelect02Component {

  frontend = [
    {
      value: 'Angular',
      selected: true
    },
    {
      value: 'Bootstrap',
      disabled: true
    },
    {
      value: 'React.js'
    },
    {
      value: 'Vue.js'
    }
  ];

  backend = [
    {
      value: 'b1',
      label: 'Django'
    },
    {
      value: 'b2',
      label: 'Laravel',
      selected: true
    },
    {
      value: 'b3',
      label: 'Node.js'
    }
  ];
}
