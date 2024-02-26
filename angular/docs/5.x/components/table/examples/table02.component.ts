import { Component, OnInit } from '@angular/core';
import { TableColorDirective } from '../../../../../../../coreui-angular/src/lib/table/table-color.directive';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table02',
    templateUrl: './table02.component.html',
    styleUrls: ['./table02.component.scss'],
    standalone: true,
    imports: [TableDirective, TableColorDirective]
})
export class Table02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
