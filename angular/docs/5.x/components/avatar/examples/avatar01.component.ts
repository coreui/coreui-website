import { Component } from '@angular/core';
import { AvatarComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-avatar01-example',
  templateUrl: './avatar01.component.html',
  standalone: true,
  imports: [TextColorDirective, AvatarComponent]
})
export class Avatar01Component {}
