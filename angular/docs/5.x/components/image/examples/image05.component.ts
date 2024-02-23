import { Component } from '@angular/core';
import { ImgDirective } from '../../../../../../../coreui-angular/src/lib/image/img.directive';

@Component({
    selector: 'docs-image05-example',
    templateUrl: './image05.component.html',
    standalone: true,
    imports: [ImgDirective],
})
export class Image05Component {

  constructor() { }
}
