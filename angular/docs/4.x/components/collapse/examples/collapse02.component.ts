import { Component } from '@angular/core';

@Component({
  selector: 'docs-collapse02',
  templateUrl: './collapse02.component.html',
  styleUrls: ['./collapse02.component.scss']
})
export class Collapse02Component {

  visible = [false, false];

  constructor() { }

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

}
