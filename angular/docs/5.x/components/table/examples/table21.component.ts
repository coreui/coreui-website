import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table21',
    templateUrl: './table21.component.html',
    styleUrls: ['./table21.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table21Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
