import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table12',
    templateUrl: './table12.component.html',
    styleUrls: ['./table12.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
