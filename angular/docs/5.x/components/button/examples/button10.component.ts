import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-button10-example',
  templateUrl: './button10.component.html',
  standalone: true,
  imports: [ButtonDirective, RouterLink]
})
export class Button10Component {

  constructor() { }
}
