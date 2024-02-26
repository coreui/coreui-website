import { Component } from '@angular/core';
import { ModalFooterComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-footer/modal-footer.component';
import { ModalBodyComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-body/modal-body.component';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { ModalTitleDirective } from '../../../../../../../coreui-angular/src/lib/modal/modal-title/modal-title.directive';
import { ModalHeaderComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal-header/modal-header.component';
import { ModalComponent } from '../../../../../../../coreui-angular/src/lib/modal/modal/modal.component';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-modal02',
    templateUrl: './modal02.component.html',
    standalone: true,
    imports: [ButtonDirective, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, ModalFooterComponent]
})
export class Modal02Component {

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }
}
