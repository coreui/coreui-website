import { Component, signal } from '@angular/core';
import { AlertComponent, ButtonCloseDirective, ButtonDirective, TemplateIdDirective } from '@coreui/angular';

@Component({
  selector: 'docs-alert05-example',
  templateUrl: './alert05.component.html',
  imports: [AlertComponent, TemplateIdDirective, ButtonCloseDirective, ButtonDirective]
})
export class Alert05Component {
  readonly visible = signal(true);

  onResetDismiss() {
    this.visible.set(true);
  }
}
