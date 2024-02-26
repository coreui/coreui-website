import { Component } from '@angular/core';
import { AvatarComponent, TextColorDirective } from '@coreui/angular';

@Component({
    selector: 'docs-avatar03-example',
    templateUrl: './avatar03.component.html',
    standalone: true,
    imports: [TextColorDirective, AvatarComponent],
})
export class Avatar03Component {
}
