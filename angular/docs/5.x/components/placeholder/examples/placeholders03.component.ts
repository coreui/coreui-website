import { Component } from '@angular/core';
import { ColDirective, PlaceholderDirective } from '@coreui/angular';

@Component({
  selector: 'docs-placeholders03',
  templateUrl: './placeholders03.component.html',
  styleUrls: ['./placeholders03.component.scss'],
  standalone: true,
  imports: [ColDirective, PlaceholderDirective]
})
export class Placeholders03Component {}
