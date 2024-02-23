import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table06',
    templateUrl: './table06.component.html',
    styleUrls: ['./table06.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table06Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
