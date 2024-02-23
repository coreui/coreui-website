import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table19',
    templateUrl: './table19.component.html',
    styleUrls: ['./table19.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table19Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
