import { Component } from '@angular/core';
import { TableColorDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table15',
  templateUrl: './table15.component.html',
  styleUrls: ['./table15.component.scss'],
  standalone: true,
  imports: [TableDirective, TableColorDirective]
})
export class Table15Component {}
