import { Component, OnInit } from '@angular/core';
import { TableActiveDirective } from '../../../../../../../coreui-angular/src/lib/table/table-active.directive';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table08',
    templateUrl: './table08.component.html',
    styleUrls: ['./table08.component.scss'],
    standalone: true,
    imports: [TableDirective, TableActiveDirective]
})
export class Table08Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
