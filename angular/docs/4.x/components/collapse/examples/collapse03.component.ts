import { Component } from '@angular/core';

@Component({
  selector: 'docs-collapse03',
  templateUrl: './collapse03.component.html',
})
export class Collapse03Component {

  visible = false;

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
