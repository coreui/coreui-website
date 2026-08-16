import { Component } from '@angular/core';
import { ButtonCloseDirective, ToastBodyComponent, ToastComponent } from '@coreui/angular';

@Component({
  selector: 'docs-toast08',
  templateUrl: './toast08.component.html',
  imports: [ToastComponent, ToastBodyComponent, ButtonCloseDirective]
})
export class Toast08Component {}
