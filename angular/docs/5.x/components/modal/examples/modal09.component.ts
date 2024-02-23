import { Component } from '@angular/core';
import { ModalBodyComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-body/modal-body.component';
import { ModalTitleDirective } from '../../../../../../../coreui-angular/src/lib/modal/modal-title/modal-title.directive';
import { ModalHeaderComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-header/modal-header.component';
import { ModalComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal/modal.component';
import { ModalToggleDirective } from '../../../../../../../coreui-angular/src/lib/modal/modal-dismiss/modal-toggle.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-modal09',
    templateUrl: './modal09.component.html',
    standalone: true,
    imports: [ButtonDirective, ModalToggleDirective, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent]
})
export class Modal09Component {

}
