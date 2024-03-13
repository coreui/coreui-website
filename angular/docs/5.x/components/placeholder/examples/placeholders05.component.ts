import { Component } from '@angular/core';
import { ColDirective, PlaceholderDirective } from '@coreui/angular';

@Component({
  selector: 'docs-placeholders05',
  templateUrl: './placeholders05.component.html',
  styleUrls: ['./placeholders05.component.scss'],
  standalone: true,
  imports: [ColDirective, PlaceholderDirective]
})
export class Placeholders05Component {}
