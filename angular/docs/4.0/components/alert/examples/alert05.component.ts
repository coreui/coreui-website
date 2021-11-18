import { Component } from '@angular/core';

@Component({
  selector: 'docs-alert05-example',
  templateUrl: './alert05.component.html'
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
