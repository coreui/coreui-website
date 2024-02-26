import { Component } from '@angular/core';
import { AvatarComponent, TextColorDirective } from '@coreui/angular';

@Component({
  selector: 'docs-avatar06-example',
  templateUrl: './avatar06.component.html',
  standalone: true,
  imports: [TextColorDirective, AvatarComponent]
})
export class Avatar06Component {}
