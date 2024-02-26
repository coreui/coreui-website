import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table09',
    templateUrl: './table09.component.html',
    styleUrls: ['./table09.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table09Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
