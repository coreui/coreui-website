import { Component } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { ModalFooterComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-footer/modal-footer.component';
import { ModalBodyComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-body/modal-body.component';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { ModalTitleDirective } from '../../../../../../../coreui-angular/src/lib/modal/modal-title/modal-title.directive';
import { ModalHeaderComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-header/modal-header.component';
import { ModalComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal/modal.component';

@Component({
    selector: 'docs-modal01',
    templateUrl: './modal01.component.html',
    standalone: true,
    imports: [ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent, ButtonDirective]
})
export class Modal01Component {
}
