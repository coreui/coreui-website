import { Component } from '@angular/core';
import { ButtonDirective, ColDirective, PlaceholderDirective } from '@coreui/angular';

@Component({
  selector: 'docs-placeholders02',
  templateUrl: './placeholders02.component.html',
  styleUrls: ['./placeholders02.component.scss'],
  standalone: true,
  imports: [ColDirective, PlaceholderDirective, ButtonDirective]
})
export class Placeholders02Component {}
