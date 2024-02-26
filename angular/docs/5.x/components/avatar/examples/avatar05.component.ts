import { Component } from '@angular/core';
import { AvatarComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-avatar05-example',
  templateUrl: './avatar05.component.html',
  standalone: true,
  imports: [TextColorDirective, AvatarComponent]
})
export class Avatar05Component {}
