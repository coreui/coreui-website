import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table22',
    templateUrl: './table22.component.html',
    standalone: true,
    imports: [TableDirective],
})
export class Table22Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
