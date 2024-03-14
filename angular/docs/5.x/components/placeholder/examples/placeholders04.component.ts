import { Component } from '@angular/core';
import { BgColorDirective, ColDirective, PlaceholderDirective } from '@coreui/angular';

@Component({
  selector: 'docs-placeholders04',
  templateUrl: './placeholders04.component.html',
  styleUrls: ['./placeholders04.component.scss'],
  standalone: true,
  imports: [ColDirective, PlaceholderDirective, BgColorDirective]
})
export class Placeholders04Component {}
