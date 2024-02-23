import { Component } from '@angular/core';
import { cilCheck } from '@coreui/icons';
import { AlertComponent } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-alert06-example',
  templateUrl: './alert06.component.html',
  standalone: true,
  imports: [AlertComponent, IconDirective]
})
export class Alert06Component {

  icons = { cilCheck };

}
