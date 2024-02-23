import { Component, OnInit } from '@angular/core';
import { ModalFooterComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-footer/modal-footer.component';
import { TooltipDirective } from '../../../../../../../coreui-angular/src/lib/tooltip/tooltip.directive';
import { RouterLink } from '@angular/router';
import { PopoverDirective } from '../../../../../../../coreui-angular/src/lib/popover/popover.directive';
import { ModalBodyComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-body/modal-body.component';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { ModalTitleDirective } from '../../../../../../../coreui-angular/src/lib/modal/modal-title/modal-title.directive';
import { ModalHeaderComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-header/modal-header.component';
import { ModalComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal/modal.component';
import { ModalToggleDirective } from '../../../../../../../coreui-angular/src/lib/modal/modal-dismiss/modal-toggle.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-modal08',
    templateUrl: './modal08.component.html',
    standalone: true,
    imports: [
        ButtonDirective,
        ModalToggleDirective,
        ModalComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        ThemeDirective,
        ButtonCloseDirective,
        ModalBodyComponent,
        PopoverDirective,
        RouterLink,
        TooltipDirective,
        ModalFooterComponent,
    ],
})
export class Modal08Component {
}
