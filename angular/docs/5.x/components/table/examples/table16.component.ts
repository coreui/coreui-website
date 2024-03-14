import { Component } from '@angular/core';
import { TableColorDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table16',
  templateUrl: './table16.component.html',
  styleUrls: ['./table16.component.scss'],
  standalone: true,
  imports: [TableDirective, TableColorDirective]
})
export class Table16Component {}
