import { Component, OnInit } from '@angular/core';
import { TableDirective } from '../../../../../../../coreui-angular/src/lib/table/table.directive';

@Component({
    selector: 'docs-table04',
    templateUrl: './table04.component.html',
    styleUrls: ['./table04.component.scss'],
    standalone: true,
    imports: [TableDirective]
})
export class Table04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
