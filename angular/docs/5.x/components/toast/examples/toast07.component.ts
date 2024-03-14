import { Component } from '@angular/core';
import {
  ButtonDirective,
  ToastBodyComponent,
  ToastCloseDirective,
  ToastComponent,
  ToasterComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-toast07',
  templateUrl: './toast07.component.html',
  standalone: true,
  imports: [ToasterComponent, ToastComponent, ToastBodyComponent, ButtonDirective, ToastCloseDirective]
})
export class Toast07Component {}
