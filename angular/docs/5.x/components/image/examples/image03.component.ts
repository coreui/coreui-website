import { Component } from '@angular/core';
import { ImgDirective } from '../../../../../../../coreui-angular/src/lib/image/img.directive';

@Component({
    selector: 'docs-image03-example',
    templateUrl: './image03.component.html',
    standalone: true,
    imports: [ImgDirective],
})
export class Image03Component {

  constructor() { }
}
