import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table14',
    templateUrl: './table14.component.html',
    styleUrls: ['./table14.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table14Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
