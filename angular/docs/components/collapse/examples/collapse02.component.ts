import { Component, signal } from '@angular/core';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  CollapseDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-collapse02',
  templateUrl: './collapse02.component.html',
  imports: [ButtonDirective, RowComponent, ColComponent, CollapseDirective, CardComponent, CardBodyComponent]
})
export class Collapse02Component {
  readonly visible = signal([false, false]);

  toggleCollapse(id: number): void {
    this.visible.update((value) => {
      value[id] = !value[id];
      return value;
    });
  }
}
