import { Component } from '@angular/core';
import { ImgDirective } from '../../../../../../../coreui-angular/src/lib/image/img.directive';

@Component({
    selector: 'docs-image01-example',
    templateUrl: './image01.component.html',
    standalone: true,
    imports: [ImgDirective],
})
export class Image01Component {

  constructor() { }
}
