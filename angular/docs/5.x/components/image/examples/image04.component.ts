import { Component } from '@angular/core';
import { ImgDirective } from '../../../../../../../coreui-angular/src/lib/image/img.directive';

@Component({
    selector: 'docs-image04-example',
    templateUrl: './image04.component.html',
    standalone: true,
    imports: [ImgDirective],
})
export class Image04Component {

  constructor() { }
}
