import { Component } from '@angular/core';
import { AvatarComponent, TextColorDirective } from '@coreui/angular';

@Component({
    selector: 'docs-avatar04-example',
    templateUrl: './avatar04.component.html',
    standalone: true,
    imports: [TextColorDirective, AvatarComponent],
})
export class Avatar04Component {}
