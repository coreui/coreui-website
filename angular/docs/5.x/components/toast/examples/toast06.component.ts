import { Component } from '@angular/core';
import { ButtonCloseDirective, ThemeDirective, ToastBodyComponent, ToastComponent } from '@coreui/angular';

@Component({
  selector: 'docs-toast06',
  templateUrl: './toast06.component.html',
  styleUrls: ['./toast06.component.scss'],
  standalone: true,
  imports: [ToastComponent, ToastBodyComponent, ThemeDirective, ButtonCloseDirective]
})
export class Toast06Component {}
