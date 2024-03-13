import { Component } from '@angular/core';
import { AlignDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table13',
  templateUrl: './table13.component.html',
  styleUrls: ['./table13.component.scss'],
  standalone: true,
  imports: [TableDirective, AlignDirective]
})
export class Table13Component {}
