import { Component } from '@angular/core';
import { TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table01',
  templateUrl: './table01.component.html',
  styleUrls: ['./table01.component.scss'],
  standalone: true,
  imports: [TableDirective]
})
export class Table01Component {}
