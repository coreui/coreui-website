import { Component } from '@angular/core';
import { ImgDirective } from '../../../../../../../coreui-angular/src/lib/image/img.directive';

@Component({
    selector: 'docs-image02-example',
    templateUrl: './image02.component.html',
    standalone: true,
    imports: [ImgDirective],
})
export class Image02Component {

  constructor() { }
}
