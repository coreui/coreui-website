import { Component } from '@angular/core';
import { ButtonCloseDirective, ThemeDirective, ToastBodyComponent, ToastComponent } from '@coreui/angular';

@Component({
  selector: 'docs-toast08',
  templateUrl: './toast08.component.html',
  standalone: true,
  imports: [ToastComponent, ToastBodyComponent, ThemeDirective, ButtonCloseDirective]
})
export class Toast08Component {}
