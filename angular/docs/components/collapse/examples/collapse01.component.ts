import { Component, signal } from '@angular/core';
import { ButtonDirective, CardBodyComponent, CardComponent, CollapseDirective } from '@coreui/angular';

@Component({
  selector: 'docs-collapse01',
  templateUrl: './collapse01.component.html',
  imports: [ButtonDirective, CollapseDirective, CardComponent, CardBodyComponent]
})
export class Collapse01Component {
  readonly visible = signal(false);

  toggleCollapse(): void {
    this.visible.update((value) => !value);
  }
}
