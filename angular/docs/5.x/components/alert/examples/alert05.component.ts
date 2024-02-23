import { Component } from '@angular/core';
import {
  AlertComponent,
  ButtonCloseDirective,
  ButtonDirective,
  TemplateIdDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-alert05-example',
  templateUrl: './alert05.component.html',
  standalone: true,
  imports: [AlertComponent, TemplateIdDirective, ThemeDirective, ButtonCloseDirective, ButtonDirective]
})
export class Alert05Component {

  visible = true;

  onVisibleChange(eventValue: boolean) {
    this.visible = eventValue;
  }

  onResetDismiss() {
    this.visible = true;
  }
}
