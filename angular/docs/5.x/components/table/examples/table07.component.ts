import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table07',
    templateUrl: './table07.component.html',
    styleUrls: ['./table07.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table07Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
