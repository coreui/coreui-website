import { Component, OnInit } from '@angular/core';
import { TableColorDirective } from '../../../../../../../coreui-angular/src/lib/table/table-color.directive';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table15',
    templateUrl: './table15.component.html',
    styleUrls: ['./table15.component.scss'],
    standalone: true,
    imports: [TableDirective, TableColorDirective]
})
export class Table15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
