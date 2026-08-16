import { Component, signal } from '@angular/core';
import { AlertComponent, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-alert04-example',
  templateUrl: './alert04.component.html',
  imports: [AlertComponent, ButtonDirective]
})
export class Alert04Component {
  readonly visible = signal(true);
  readonly dismissible = signal(true);
}
