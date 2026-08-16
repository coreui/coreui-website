import { Component, signal } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CollapseDirective } from '@coreui/angular';

@Component({
  selector: 'docs-collapse03',
  templateUrl: './collapse03.component.html',
  imports: [ButtonDirective, CardComponent, CollapseDirective, CardBodyComponent]
})
export class Collapse03Component {
  readonly visible = signal(false);

  toggleCollapse(): void {
    this.visible.update((visible) => !visible);
  }
}
