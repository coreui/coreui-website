import { Component } from '@angular/core';
import { AvatarComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-avatar02-example',
  templateUrl: './avatar02.component.html',
  standalone: true,
  imports: [TextColorDirective, AvatarComponent]
})
export class Avatar02Component {}
