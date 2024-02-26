import { Component } from '@angular/core';
import { OffcanvasBodyComponent } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-body/offcanvas-body.component';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { OffcanvasTitleDirective } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-title/offcanvas-title.directive';
import { OffcanvasHeaderComponent } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-header/offcanvas-header.component';
import { OffcanvasComponent } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas/offcanvas.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { AlertComponent } from '../../../../../../../coreui-angular/src/lib/alert/alert.component';
import { OffcanvasToggleDirective } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-toggle/offcanvas-toggle.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-offcanvas05',
    templateUrl: './offcanvas05.component.html',
    standalone: true,
    imports: [ButtonDirective, OffcanvasToggleDirective, AlertComponent, ThemeDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent]
})
export class Offcanvas05Component {}
