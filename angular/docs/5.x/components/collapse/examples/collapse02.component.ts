import { Component } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CollapseDirective,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-collapse02',
  templateUrl: './collapse02.component.html',
  styleUrls: ['./collapse02.component.scss'],
  standalone: true,
  imports: [ButtonDirective, RowComponent, ColComponent, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent]
})
export class Collapse02Component {

  visible = [false, false];

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

}
