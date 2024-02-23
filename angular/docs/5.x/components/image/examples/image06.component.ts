import { Component } from '@angular/core';
import { ImgDirective } from '../../../../../../../coreui-angular/src/lib/image/img.directive';

@Component({
    selector: 'docs-image06-example',
    templateUrl: './image06.component.html',
    standalone: true,
    imports: [ImgDirective]
})
export class Image06Component {

  constructor() { }
}
