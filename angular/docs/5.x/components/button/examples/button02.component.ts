import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-button02-example',
  templateUrl: './button02.component.html',
  standalone: true,
  imports: [ButtonDirective, RouterLink]
})
export class Button02Component {

  constructor() { }
}
