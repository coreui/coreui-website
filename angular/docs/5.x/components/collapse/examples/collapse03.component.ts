import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CollapseDirective,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-collapse03',
  templateUrl: './collapse03.component.html',
  standalone: true,
  imports: [
    ButtonDirective,
    TextColorDirective,
    CardComponent,
    CollapseDirective,
    CardBodyComponent
  ]
})
export class Collapse03Component {

  visible = false;

  toggleCollapse(): void {
    this.visible = !this.visible;
  }
}
