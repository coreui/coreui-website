import { Component } from '@angular/core';

@Component({
  selector: 'docs-collapse01',
  templateUrl: './collapse01.component.html',
  styleUrls: ['./collapse01.component.scss']
})
export class Collapse01Component {

  visible = false;

  constructor() { }

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
