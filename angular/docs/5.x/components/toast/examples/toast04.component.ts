import { Component } from '@angular/core';
import { ToastBodyComponent, ToastComponent, ToastHeaderComponent } from '@coreui/angular';
import { ToastSampleIconComponent } from './toast-sample-icon.component';

@Component({
  selector: 'docs-toast04',
  templateUrl: './toast04.component.html',
  standalone: true,
  imports: [ToastComponent, ToastHeaderComponent, ToastSampleIconComponent, ToastBodyComponent]
})
export class Toast04Component {}
