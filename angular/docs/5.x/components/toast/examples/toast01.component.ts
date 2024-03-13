import { Component } from '@angular/core';
import { ToastBodyComponent, ToastComponent, ToastHeaderComponent } from '@coreui/angular';
import { ToastSampleIconComponent } from './toast-sample-icon.component';

@Component({
  selector: 'docs-toast01',
  templateUrl: './toast01.component.html',
  standalone: true,
  imports: [
    ToastComponent,
    ToastHeaderComponent,
    ToastSampleIconComponent,
    ToastBodyComponent
  ]
})
export class Toast01Component {}
