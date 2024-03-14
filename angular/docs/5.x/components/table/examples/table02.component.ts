import { Component } from '@angular/core';
import { TableColorDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table02',
  templateUrl: './table02.component.html',
  styleUrls: ['./table02.component.scss'],
  standalone: true,
  imports: [TableDirective, TableColorDirective]
})
export class Table02Component {}
