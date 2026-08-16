import { Component } from '@angular/core';
import { ButtonCloseDirective, ToastBodyComponent, ToastComponent } from '@coreui/angular';

@Component({
  selector: 'docs-toast06',
  templateUrl: './toast06.component.html',
  imports: [ToastComponent, ToastBodyComponent, ButtonCloseDirective]
})
export class Toast06Component {}
