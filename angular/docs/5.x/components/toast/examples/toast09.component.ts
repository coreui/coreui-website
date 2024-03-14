import { Component } from '@angular/core';
import { ToastBodyComponent, ToastComponent, ToasterComponent, ToastHeaderComponent } from '@coreui/angular';
import { ToastSampleIconComponent } from './toast-sample-icon.component';

@Component({
  selector: 'docs-toast09',
  templateUrl: './toast09.component.html',
  styleUrls: ['./toast09.component.scss'],
  standalone: true,
  imports: [ToasterComponent, ToastComponent, ToastHeaderComponent, ToastSampleIconComponent, ToastBodyComponent]
})
export class Toast09Component {}
