import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table18',
    templateUrl: './table18.component.html',
    styleUrls: ['./table18.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table18Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
