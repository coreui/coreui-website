import { Component } from '@angular/core';
import { BorderDirective, TableDirective } from '@coreui/angular';

@Component({
  selector: 'docs-table10',
  templateUrl: './table10.component.html',
  styleUrls: ['./table10.component.scss'],
  standalone: true,
  imports: [TableDirective, BorderDirective]
})
export class Table10Component {}
