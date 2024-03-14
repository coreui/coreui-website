import { Component } from '@angular/core';
import { TableActiveDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table08',
  templateUrl: './table08.component.html',
  styleUrls: ['./table08.component.scss'],
  standalone: true,
  imports: [TableDirective, TableActiveDirective]
})
export class Table08Component {}
