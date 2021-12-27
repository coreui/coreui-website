import { Component } from '@angular/core';

@Component({
  selector: 'docs-multi-select01',
  templateUrl: './multi-select01.component.html',
})
export class MultiSelect01Component {

  frontend = [
    {
      value: 'Angular'
    },
    {
      value: 'Bootstrap'
    },
    {
      value: 'React.js'
    },
    {
      value: 'Vue.js'
    }
  ];
}
