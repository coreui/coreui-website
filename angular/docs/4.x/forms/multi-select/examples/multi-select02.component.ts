import { Component } from '@angular/core';

@Component({
  selector: 'docs-multi-select02',
  templateUrl: './multi-select02.component.html',
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
    },
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
