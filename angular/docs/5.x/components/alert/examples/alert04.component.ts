import { Component } from '@angular/core';
import { AlertComponent, ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-alert04-example',
  templateUrl: './alert04.component.html',
  standalone: true,
  imports: [AlertComponent, ButtonDirective]
})
export class Alert04Component {

  visible = true;
  dismissible = true;

}
