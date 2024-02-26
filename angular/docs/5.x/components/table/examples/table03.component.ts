import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table03',
    templateUrl: './table03.component.html',
    standalone: true,
    imports: [TableDirective],
})
export class Table03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
