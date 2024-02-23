import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table11',
    templateUrl: './table11.component.html',
    styleUrls: ['./table11.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
