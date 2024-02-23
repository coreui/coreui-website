import { Component, OnInit } from '@angular/core';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';

@Component({
    selector: 'docs-toast06',
    templateUrl: './toast06.component.html',
    styleUrls: ['./toast06.component.scss'],
    standalone: true,
    imports: [ToastComponent, ToastBodyComponent, ThemeDirective, ButtonCloseDirective]
})
export class Toast06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
