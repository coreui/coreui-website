import { Component } from '@angular/core';
import { BgColorDirective, ColDirective, PlaceholderDirective } from '@coreui/angular';

@Component({
  selector: 'docs-placeholders04',
  templateUrl: './placeholders04.component.html',
  imports: [ColDirective, PlaceholderDirective, BgColorDirective]
})
export class Placeholders04Component {}
