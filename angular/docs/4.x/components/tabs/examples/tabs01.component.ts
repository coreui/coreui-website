import { Component } from '@angular/core';

@Component({
  selector: 'docs-tabs01',
  templateUrl: './tabs01.component.html',
})
export class Tabs01Component {
  constructor() {}

  onChange($event: number) {
    console.log('onChange', $event)
  }
}
